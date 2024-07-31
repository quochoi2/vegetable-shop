import { handleCreateProductAction } from '@/actions/product'
import { handleGetManufactureData } from '@/actions/manufacture'
import { handleGetAllCategoryAction } from '@/actions/category'
import {
   Modal, Input, Form, Row, Col, message, Select, Upload, Button
} from 'antd'
import { useEffect, useState } from 'react'
import { UploadOutlined} from '@ant-design/icons'


interface IProps {
   isCreateModalOpen: boolean;
   setIsCreateModalOpen: (v: boolean) => void
}

const CreateProduct = (props: IProps) => {
   const { isCreateModalOpen, setIsCreateModalOpen } = props
   const [imageFile, setImageFile] = useState<any>()
   const [manufactures, setManufactures] = useState<any[]>([])
   const [categories, setCategories] = useState<any[]>([])

   const [form] = Form.useForm()

   const handleGetManufacture = async () => {
      const res = await handleGetManufactureData()
      setManufactures(res)
   }

   const handleGetCategory = async () => {
      const res = await handleGetAllCategoryAction()
      setCategories(res)
   }

   useEffect(() => {
      handleGetManufacture()
      handleGetCategory()
   }, [])

   const handleCloseCreateModal = () => {
      form.resetFields()
      setIsCreateModalOpen(false)
   }

   const onFinish = async (values: any) => {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('image', imageFile)
      formData.append('manufacture_id', values.manufacture_id)
      formData.append('category_id', values.category_id)
      formData.append('price', values.price)

      try {
         await handleCreateProductAction(formData)
         message.success('Thêm thành công!')
         handleCloseCreateModal()
      } catch (error) {
         console.error('Error:', error)
         message.error('Đã xảy ra lỗi!')
      }
   }

   return (
      <Modal
         title="Thêm mới"
         open={isCreateModalOpen}
         onOk={() => form.submit()}
         onCancel={() => handleCloseCreateModal()}
         maskClosable={false}
         okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
      >
         <Form
            name="basic"
            onFinish={onFinish}
            layout="vertical"
            form={form}
         >
            <Row gutter={[15, 0]}>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Tên"
                     name="name"
                     rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
                  >
                     <Input placeholder='Nhập tên...'/>
                  </Form.Item>
               </Col>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Ảnh"
                     name="image"
                     rules={[{ required: true, message: 'Vui lòng chọn ảnh!' }]}
                  >
                     <Upload
                        action="http://localhost:3001/products"
                        listType="picture"
                        onChange={(info) => {
                           setImageFile(info.file.originFileObj)
                           console.log(info.file.originFileObj)
                        }}
                     >
                        <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                     </Upload>          
                  </Form.Item>
               </Col>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Nhà cung cấp"
                     name="manufacture_id"
                     rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
                  >
                     <Select
                        placeholder="Chọn nhà cung cấp"
                        style={{ width: '100%' }}
                     >
                        {manufactures && manufactures.length > 0 ? (
                           manufactures.map((item: any) => (
                              <Select.Option key={item.id} value={item.id}>
                                 {item.name}
                              </Select.Option>
                           ))
                        ) : (
                           <Select.Option value="">Không có dữ liệu</Select.Option>
                        )}
                     </Select>
                  </Form.Item>
               </Col>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Danh mục"
                     name="category_id"
                     rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
                  >
                     <Select
                        placeholder="Chọn danh mục"
                        style={{ width: '100%' }}
                     >
                        {categories && categories.length > 0 ? (
                           categories.map((item: any) => (
                              <Select.Option key={item.id} value={item.id}> 
                                 {item.name}
                              </Select.Option>
                           ))
                        ) : (
                           <Select.Option value="">Không có dữ liệu</Select.Option>
                        )}
                     </Select>
                  </Form.Item>
               </Col>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Giá thành"
                     name="price"
                     rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
                  >
                     <Input placeholder='Nhập giá thành...'/>
                  </Form.Item>
               </Col>  
            </Row>
         </Form>
      </Modal>
   )
}

export default CreateProduct
