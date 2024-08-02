'use client'
import ViewBill from "./ShowView"
import Image from "next/image"
import { imgShop } from "../../../public"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { ColumnsType } from 'antd/es/table'
import { DeleteTwoTone, EditTwoTone, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Modal, TableColumnsType, Breadcrumb, Card, message, Popconfirm } from 'antd'

const HistoryOrder = () => {
  const router = useRouter()
  const [data, setData] = useState<any[]>([])
  const [IsIdView, setIsIdView] = useState<any>()
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const columns: any = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: 'Tên',
      dataIndex: ['user', 'name'],
    },
    {
      title: 'Ngày đặt hàng',
      dataIndex: 'createdAt',
    },
    {
      title: 'Hành động',
      align: "center",
      render: (text: string, record: any, index: string) => {
        return (
            <>
              <EyeOutlined 
                  style={{ cursor: "pointer", color: '#3B82F6' }}
                  onClick={() => { 
                    setIsIdView(record.id)
                    setIsViewModalOpen(true) 
                  }}
              />
            </>
        )
      }
    }
  ]

  const handleShow = async () => {
    const userId = localStorage.getItem('userId')
    try {
      const res = await fetch('http://localhost:8000/api/bill/' + userId, {
        method: 'GET'
      })
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const newData = await res.json()
      setData(newData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    handleShow()    
  }, [])

  return (  
     <div className="mx-5 my-[35px]">
        <div className="relative">
           <Image className="rounded-2xl"
              src={imgShop.header}
              width={1590}
              height={220}
              alt="header-bg"
           />
           <div className="absolute top-0 w-full flex justify-between px-20 py-[87px]">
              <div className="flex justify-center items-center">
                  <Breadcrumb className="text-base" separator=">" items={[
                      { title: 'Trang chủ', href: '/', },
                      { title: 'Lịch sử đặt hàng', },
                  ]} />
              </div>
              <div className="text-[40px] font-semibold">Lịch sử đặt hàng</div>
           </div>
        </div>
        <div>
          <Table dataSource={data} columns={columns} />
          <ViewBill 
              isViewModalOpen={isViewModalOpen}
              setIsViewModalOpen={setIsViewModalOpen}
              isIdView={IsIdView}
          />
        </div>
     </div>
  )
}

export default HistoryOrder
