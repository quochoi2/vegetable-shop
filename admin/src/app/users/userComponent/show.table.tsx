'use client'
import type { ColumnsType } from 'antd/es/table'
import { Table, Popconfirm, Button, message } from 'antd'
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { handleDeleteProductAction } from '@/actions/product'
import { PlusOutlined, DeleteTwoTone, EditTwoTone, EyeOutlined} from '@ant-design/icons'
import SearchUser from './search.table'

interface IUser {
   id: number
   name: string
   image: string
   email: string
}

interface IProps {
   data: IUser[] | []
   search?: string
   meta: {
      current: number
      limit: number
      total: number
   }
}

const ShowUser = (props: IProps) => {
   const { data, search, meta } = props

   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()

   const [isFetching, setIsFetching] = useState<boolean>(false)
   const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
   const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false)
   const [dataView, setDataView] = useState<any>(null)
   const [dataUpdate, setDataUpdate] = useState<any>(null)


   const columns: ColumnsType<IUser> = [
      {
         title: '#',
         dataIndex: 'id',
      },
      // {
      //    title: 'Ảnh',
      //    dataIndex: 'image',
      //    render: image => <Image className='rounded-full' width={100} height={100} src={image} alt='product' />
      // },
      {
         title: 'Tên',
         dataIndex: 'name',
      },
      {
         title: 'Email',
         dataIndex: 'email',
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
                        setIsViewModalOpen(true)
                        setDataView(record)
                     }}
                  />

                  <EditTwoTone
                     twoToneColor="#f57800" style={{ cursor: "pointer", margin: "0 20px" }}
                     onClick={() => {
                        setIsUpdateModalOpen(true)
                        setDataUpdate(record)
                     }}
                  />

                  <Popconfirm
                     placement="leftTop"
                     title={"Xác nhận xóa ?"}
                     description={"Bạn có chắc chắn muốn xóa mục này ?"}
                     onConfirm={() => handleDeleteProduct(record)}
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

   const handleDeleteProduct = async (data: any) => {
      await handleDeleteProductAction({ id: data.id })
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
               <SearchUser search={search}/>
            </div>
            <div>
               <Button
                  className='bg-blue-500'
                  icon={<PlusOutlined />}
                  type="primary"
                  onClick={() => setIsCreateModalOpen(true)}
               >
                  Thêm mới
               </Button>
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
 
export default ShowUser