'use client'
import type { ColumnsType } from 'antd/es/table'
import { Table, Popconfirm, Button, message } from 'antd'
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import CreateCategory from './create.table'
import UpdateCategory from './update.table'
import SearchCategory from './search.table'
import { handleDeleteCategoryAction } from '@/actions/category'
import { PlusOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons'

interface ICategory {
   id: number
   name: string
}

interface IProps {
   data: ICategory[] | []
   search?: string
   meta: {
      current: number
      limit: number
      total: number
   }
}

const ShowCategory = (props: IProps) => {
   const { data, search, meta } = props

   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()

   const [isFetching, setIsFetching] = useState<boolean>(false)
   const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
   const [dataUpdate, setDataUpdate] = useState<any>(null)

   const columns: ColumnsType<ICategory> = [
      {
         title: '#',
         dataIndex: 'id',
      },
      {
         title: 'Tên',
         dataIndex: 'name',
      },
      {
         title: 'Hành động',
         align: "center",
         render: (text, record, index) => {
            return (
               <>
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
                     onConfirm={() => handleDeleteCategory(record)}
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

   const handleDeleteCategory = async (data: any) => {
      const res = await handleDeleteCategoryAction({ id: data.id })
      message.success("Xoá thành công !")
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
               <SearchCategory search={search}/>
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

         <CreateCategory
            isCreateModalOpen={isCreateModalOpen}
            setIsCreateModalOpen={setIsCreateModalOpen}
         />

         <UpdateCategory
            isUpdateModalOpen={isUpdateModalOpen}
            setIsUpdateModalOpen={setIsUpdateModalOpen}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
         />
      </div>
   )
}
 
export default ShowCategory