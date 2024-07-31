import { handleCreateManufactureAction } from '@/actions/manufacture'
import {
   Modal, Input, Form, Row, Col, message
} from 'antd'

interface IProps {
   isCreateModalOpen: boolean;
   setIsCreateModalOpen: (v: boolean) => void
}

const CreateManufacture = (props: IProps) => {
   const { isCreateModalOpen, setIsCreateModalOpen } = props

   const [form] = Form.useForm()

   const handleCloseCreateModal = () => {
      form.resetFields()
      setIsCreateModalOpen(false)
   }

   const onFinish = async (values: any) => {
      const res = await handleCreateManufactureAction(values)
      handleCloseCreateModal()
      message.success("Thêm thành công!")
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

export default CreateManufacture
