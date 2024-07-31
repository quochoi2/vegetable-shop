'use client'
import type { ColumnsType } from 'antd/es/table'
import { Table, Popconfirm, message } from 'antd'
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import SearchBill from './search.table'
import { handleUpdateBillAction, handleDeleteBillAction } from '@/actions/bill'
import { DeleteTwoTone, EditTwoTone, EyeOutlined, PrinterOutlined } from '@ant-design/icons'
import ViewBill from './view.table'
import PrintBill from './print.table'

interface IBill {
   id: number
   user_id: {
      name: string
      phone: string
      address: string
   }
   method: string
   status: string
}

interface IProps {
   data: IBill[] | []
   search?: string
   meta: {
      current: number
      limit: number
      total: number
   }
}

const ShowBill = (props: IProps) => {
   const { data, search, meta } = props

   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()

   const [isFetching, setIsFetching] = useState<boolean>(false)
   const [isIdView, setIsIdView] = useState<any>()
   const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false)
   const [isIdPrint, setIsIdPrint] = useState<any>()
   const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false)

   const columns: ColumnsType<IBill> = [
      {
         title: '#',
         dataIndex: 'id',
      },
      {
         title: 'Tên',
         dataIndex: ['user', 'name'],
      },
      {
         title: 'Số điện thoại',
         dataIndex: ['user', 'phone'],
      },
      {
         title: 'Địa chỉ',
         dataIndex: ['user', 'address'],
      },
      {
         title: 'Phương thức',
         dataIndex: 'method',
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
                        setIsIdView(record.id)
                        setIsViewModalOpen(true) 
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
                  <PrinterOutlined 
                     style={{ marginLeft: '16px', cursor: "pointer", color: '#84cc16' }}
                     onClick={() => { 
                        setIsIdPrint(record.id)
                        setIsPrintModalOpen(true) 
                     }}
                  />
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
               <SearchBill search={search}/>
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
         <ViewBill 
            isViewModalOpen={isViewModalOpen}
            setIsViewModalOpen={setIsViewModalOpen}
            isIdView={isIdView}
         />
         <PrintBill 
            isPrintModalOpen={isPrintModalOpen}
            setIsPrintModalOpen={setIsPrintModalOpen}
            isIdPrint={isIdPrint}
         />
      </div>
   )
}
 
export default ShowBill