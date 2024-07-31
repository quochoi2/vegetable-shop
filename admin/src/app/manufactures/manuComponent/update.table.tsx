import { handleUpdateManufactureAction } from '@/actions/manufacture'
import {
   Modal, Input,
   Form, Row, Col, message
} from 'antd'
import { useEffect } from 'react'

interface IProps {
   isUpdateModalOpen: boolean
   setIsUpdateModalOpen: (v: boolean) => void
   dataUpdate: any
   setDataUpdate: any
}

const UpdateManufacture = (props: IProps) => {
   const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } = props

   const [form] = Form.useForm()

   useEffect(() => {
      if (dataUpdate) {
         form.setFieldsValue({
            name: dataUpdate.name,
            email: dataUpdate.email,
         })
      }
   }, [dataUpdate])

   const handleCloseUpdateModal = () => {
      form.resetFields()
      setIsUpdateModalOpen(false)
      setDataUpdate(null)
   }

   const onFinish = async (values: any) => {
      const { name, email } = values
      if (dataUpdate) {
         const data = {
            id: dataUpdate.id, 
            name,
            email, 
         }
         await handleUpdateManufactureAction(data)
         handleCloseUpdateModal()
         message.success("Sửa thành công!")
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
            <Row gutter={[15, 15]}>
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
                     label="Email"
                     name="email"
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

export default UpdateManufacture
