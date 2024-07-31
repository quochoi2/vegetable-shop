'use client'
import type { ColumnsType } from 'antd/es/table'
import { Table, Popconfirm, message } from 'antd'
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import SearchInvoice from './search.table'
import { handleUpdateBillAction, handleDeleteBillAction } from '@/actions/bill'
import { DeleteTwoTone, EditTwoTone, EyeOutlined } from '@ant-design/icons'

interface IInvoice {
   id: number
   manufacture_id: {
      name: string
      email: string
   }
   status: string
}

interface IProps {
   data: IInvoice[] | []
   search?: string
   meta: {
      current: number
      limit: number
      total: number
   }
}

const ShowInvoice = (props: IProps) => {
   const { data, search, meta } = props

   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()

   const [isFetching, setIsFetching] = useState<boolean>(false)
   const [isIdView, setIsIdView] = useState<any>()
   const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false)

   const columns: ColumnsType<IInvoice> = [
      {
         title: '#',
         dataIndex: 'id',
      },
      {
         title: 'Tên',
         dataIndex: ['manufacture', 'name'],
      },
      {
         title: 'Số điện thoại',
         dataIndex: ['manufacture', 'email'],
      },
      {
         title: 'Tình trạng',
         dataIndex: 'status',
      },
      {
         title: 'Hành động',
         align: "center",
         render: (text, record, index) => {
            return (
               <>
                  <EyeOutlined 
                     style={{ cursor: "pointer", color: '#3B82F6' }}
                     onClick={() => { 
                        // setIsIdView(record.id)
                        // setIsViewModalOpen(true) 
                        console.log('hello there !')
                     }}
                  />
                  <Popconfirm 
                     placement='leftTop'
                     title='Xác nhận đuyệt đơn hàng'
                     okText="Xác nhận"
                     cancelText="Hủy"
                     okButtonProps={{ style: { backgroundColor: '#3B82F6'} }}
                     description='Bạn có chắc muốn duyệt đơn hàng này ?'
                     onConfirm={() => handleUpdateBill(record)}
                  >
                     <EditTwoTone
                        twoToneColor="#f57800" style={{ cursor: "pointer", margin: "0 20px" }}
                        onClick={() => {
                           console.log('Good job !')
                        }}
                     />
                  </Popconfirm>
                  <Popconfirm
                     placement="leftTop"
                     title={"Xác nhận xóa ?"}
                     description={"Bạn có chắc chắn muốn xóa mục này ?"}
                     onConfirm={() => handleDeleteBill(record)}
                     okText="Xác nhận"
                     okButtonProps={{ style: { backgroundColor: '#3B82F6'} }}
                     cancelText="Hủy"
                  >
                     <span style={{ cursor: "pointer" }}>
                        <DeleteTwoTone twoToneColor="#ff4d4f" />
                     </span>
                  </Popconfirm>
               </>
            )
         }
      }
   ]

   const handleUpdateBill = async (data: any) => {
      try {
         await handleUpdateBillAction({ id: data.id })
         message.success("Duyệt thành công!")
      } catch (error) {
         message.error("Duyệt thất bại!")
      }
   }

   const handleDeleteBill = async (data: any) => {
      await handleDeleteBillAction({ id: data.id })
      message.success("Xoá thành công!")
   }

   const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
      if (pagination && pagination.current) {
         const params = new URLSearchParams(searchParams)
         params.set('page', pagination.current)
         replace(`${pathname}?${params.toString()}`)
      }
   }

   const renderHeader = () => {
      return (
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
               <SearchInvoice search={search}/>
            </div>
         </div>
      )
   }   

   return (
      <div>
         <Table 
            title={renderHeader}
            loading={isFetching}
            dataSource={data} 
            columns={columns} 
            onChange={onChange}
            pagination={{
               ...meta,
               showTotal: (total, range) => `Hiển thị ${range[0]}-${range[1]} trên ${total} mục`,
            }}
         />
      </div>
   )
}
 
export default ShowInvoice