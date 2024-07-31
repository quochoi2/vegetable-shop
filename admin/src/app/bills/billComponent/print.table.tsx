'use client'
import logo from '../../../../public/logo.png'
import Image from 'next/image';
import { Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react';

interface IProps {
  isIdPrint: number
  isPrintModalOpen: boolean
  setIsPrintModalOpen: (v: boolean) => void
}

interface IBillDetail {
  id: number
  quantity: number
  total: number
  bill_id: number
  product_id: number
}

function PrintBill(props: IProps) {
  const { isPrintModalOpen, setIsPrintModalOpen, isIdPrint } = props

  const [product, setProduct] = useState<any[]>([])

  const columns: ColumnsType<IBillDetail> = [
    {
       title: '#',
       dataIndex: 'id',
    },
    {
       title: 'Ảnh',
       dataIndex: ['product', 'image'],
       className: 'w-[200px]',
       render: (image: any) => <Image className="w-[100px] h-[100px] p-[0]" src={`${image}`} alt="Product Image" />
    },
    {
       title: 'Tên',
       dataIndex: ['product', 'name'],
    },
    {
       title: 'Giá thành',
       dataIndex: ['product', 'price'],
       render: (price: number) => price.toLocaleString('vi-VN') + ' VNĐ'
    },
    {
       title: 'Số lượng',
       dataIndex: 'quantity',
       render: (quantity: number) => quantity.toLocaleString('vi-VN')
    },
    {
       title: 'Tổng',
       dataIndex: 'total',
       render: (total: number) => total.toLocaleString('vi-VN') + ' VNĐ'
    },
  ]

  const handleShow = async() => {
    try {
        const res = await fetch(`http://localhost:8000/api/billDetail/${isIdPrint}`, {
          method: 'GET',
          next: { tags: ['list-billDetails'] }
        })
        const data = await res.json()
        console.log(data)

        setProduct(data)
    } catch(error) {
        console.log('This error is: ' + error)
    }
  }

  useEffect(() => {
    handleShow()
  }, [])


  if (!product) {
    return <div className='flex justify-center items-center min-h-full'>Không tìm thấy sản phẩm</div>
  }

  const printInvoice = () => {
    window.print()
  }

  const handleCloseUpdateModal = () => {
    setIsPrintModalOpen(false)
  }

  return (
    <Modal 
      width={1000}
      title="In hoá đơn"
      open={isPrintModalOpen}
      onCancel={() => handleCloseUpdateModal()}
      onOk={() => handleCloseUpdateModal()}
      maskClosable={false}
      okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
    >

      <div className="invoice-wrapper" id="print-area">
        <div className="invoice">
          <div className="invoice-container">
            <div className="invoice-head">
              <div className="invoice-head-top">
                <div className="invoice-head-top-left text-start">
                  <Image width={200} height={200} src={logo} alt='logo'/>
                </div>
                <div className="invoice-head-top-right text-end">
                  <h3>Invoice</h3>
                </div>
              </div>
              <div className="hr" />
              <div className="invoice-head-middle">
                <div className="invoice-head-middle-left text-start">
                  <p>
                    <span className="text-bold">Ngày</span>: â
                  </p>
                </div>
                <div className="invoice-head-middle-right text-end">
                  <p>
                    <span className="text-bold">Invoice No: a</span>
                  </p>
                </div>
              </div>
              <div className="hr" />
              <div className="invoice-head-bottom">
                <div className="invoice-head-bottom-left">
                  <ul>
                    <li className="text-bold">Invoiced To:</li>
                    <li>s</li>
                    <li>s</li>
                    <li>s</li>
                    <li>s</li>
                  </ul>
                </div>
                <div className="invoice-head-bottom-right">
                  <ul className="text-end">
                    <li className="text-bold">Pay To:</li>
                    <li>SUPO</li>
                    <li>TOKYO</li>
                    <li>189 - SENTAI</li>
                    <li>supo2839@gmaill.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="overflow-view">
              <div className="invoice-body">
                <Table dataSource={product} columns={columns} />
                <div className="invoice-body-bottom">
                  <div className="invoice-body-info-item">
                    <div className="info-item-td text-end text-bold">Total:</div>
                    <div className="info-item-td text-end">VND</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-foot text-center">
              <p>
                <span className="text-bold text-center">NOTE:&nbsp;</span>This is computer generated receipt and does not
                require physical signature.
              </p>
              <div className="invoice-btns">
                <button className="invoice-btn" onClick={() => printInvoice()}>
                  <span>
                    <i className="fa-solid fa-print" />
                  </span>
                  <span>Print</span>
                </button>
                <button type="button" className="invoice-btn">
                  <span>
                    <i className="fa-solid fa-download" />
                  </span>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PrintBill;