import { handleUpdateProductAction } from '@/actions/product'
import { handleGetManufactureData } from '@/actions/manufacture'
import {
   Modal, Input, Upload, Select, 
   Form, Row, Col, message, Button
} from 'antd'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { handleGetAllCategoryAction } from '@/actions/category'
import { UploadOutlined} from '@ant-design/icons'


interface IProps {
   isUpdateModalOpen: boolean
   setIsUpdateModalOpen: (v: boolean) => void
   dataUpdate: any
   setDataUpdate: any
}

const UpdateProduct = (props: IProps) => {
   const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } = props

   const [form] = Form.useForm()

   const [imageFile, setImageFile] = useState<any>()
   const [manufactures, setManufactures] = useState<any[]>([])
   const [categories, setCategories] = useState<any[]>([])

   useEffect(() => {
      handleGetManufactureData().then(setManufactures)
      handleGetAllCategoryAction().then(setCategories)
   }, [])

   useEffect(() => {
      if (dataUpdate) {
         form.setFieldsValue({
            name: dataUpdate.name,
            image: dataUpdate.image,
            price: dataUpdate.price,
            category_id: dataUpdate.category_id,
            manufacture_id: dataUpdate.manufacture_id,
         })
         if (dataUpdate.image) {
            setImageFile(dataUpdate.image)
         } else {
            setImageFile(null)
         }   
      }}, [dataUpdate])

   const handleCloseUpdateModal = () => {
      form.resetFields()
      setIsUpdateModalOpen(false)
      setDataUpdate(null)
   }

   const onFinish = async (values: any) => {
      const { name, image, price, category_id, manufacture_id } = values
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', price)
      formData.append('category_id', category_id)
      formData.append('manufacture_id', manufacture_id)

      if (image && image.length > 0) {
         formData.append('image', imageFile)
      } else if (dataUpdate.image) {
         formData.append('image', dataUpdate.image)
      }
      
      try {
         if (dataUpdate) {
            await handleUpdateProductAction(dataUpdate.id, formData)
            handleCloseUpdateModal()
            message.success("Sửa thành công!")
         }
      } catch (error) {
         message.error(`Cập nhật sản phẩm thất bại: ${message}`)
      }
   }

   return (
      <Modal
         title="Cập nhật"
         open={isUpdateModalOpen}
         onOk={() => form.submit()}
         onCancel={() => handleCloseUpdateModal()}
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
                     <Input />
                  </Form.Item>
               </Col>
               <Col span={48} md={24}>
                  <Form.Item
                     label="Ảnh"
                     name="image"
                     rules={[{ required: true, message: 'Vui lòng chọn ảnh!' }]}
                  >
                     <Upload
                        listType='picture'
                        beforeUpload={() => false}
                        onChange={(info) => {
                           setImageFile(info.file.originFileObj)
                           console.log(info.file.originFileObj)
                        }}
                     >
                        {imageFile ? (
                           <Image
                              src={imageFile}
                              width={100}
                              height={100}
                              alt="product"
                           />
                        ) : (
                           <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                        )}
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
                     <Input />
                  </Form.Item>
               </Col>
            </Row>
         </Form>
      </Modal>
   )
}

export default UpdateProduct
