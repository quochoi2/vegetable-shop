'use client'
import { imgShop } from "../../../public"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { ColumnsType } from 'antd/es/table'
import Image from "next/image"
import { DeleteTwoTone, EditTwoTone, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Modal, TableColumnsType, Breadcrumb, Card, message, Popconfirm } from 'antd'

interface IProps {
  isIdView: number
  isViewModalOpen: boolean
  setIsViewModalOpen: (v: boolean) => void
}

interface IBillDetail {
  id: number
  quantity: number
  total: number
  bill_id: number
  product_id: number
}

const ViewBill = (props : IProps) => {
    const { isViewModalOpen, setIsViewModalOpen, isIdView } = props
    const [dataView, setDataView] = useState<any>([])
    const [isDelete, setIsDelete] = useState<boolean>(false)

    const handleViewBillDetail = async() => {
        try {
          const res = await fetch(`http://localhost:8000/api/billDetail/${isIdView}`, {
              method: 'GET',
          })
          const data = await res.json()
          setDataView(data)
        } catch(error) {
          console.log('This error is: ' + error)
          message.error('Có lỗi xảy ra')
        }
    }

    useEffect(() => {
        if (isViewModalOpen && isIdView) {
          handleViewBillDetail()
          setIsDelete(false)
        }
    }, [isViewModalOpen, isIdView, isDelete])

    const columns: ColumnsType<IBillDetail> = [
        {
          title: '#',
          dataIndex: 'id',
        },
        {
          title: 'Ảnh',
          dataIndex: ['product', 'image'],
          className: 'w-[200px]',
          render: image => <Image className="w-[100px] h-[100px] p-[0]" width={100} height={100} src={`${image}`} alt="Product Image" />
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

    const handleCloseUpdateModal = () => {
      setIsViewModalOpen(false)
   }

    return (
        <Modal
          width={1000}
          title="Danh sách chi tiết hoá đơn"
          open={isViewModalOpen}
          onCancel={() => handleCloseUpdateModal()}
          onOk={() => handleCloseUpdateModal()}
          maskClosable={false}
          okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
        >
          <Table 
              rowKey="id" columns={columns} dataSource={dataView ? dataView : []}
          />
        </Modal>
    )
}

export default ViewBill