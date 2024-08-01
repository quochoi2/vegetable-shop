'use client'
import { Button, Input, Form, message, Row, Col } from "antd"
import { Checkbox } from 'antd'
import Image from "next/image";
import { imgLogin } from "../../../../public"
import Link from "next/link"
import { useRouter } from "next/navigation"

const ShowAnother = ({className, icon, text, classNameText} : {classNameText?: string, className?: string, icon: string, text: string}) => {
   return (
      <div className={`${className} px-6 py-4 flex rounded-md mb-5`}>
         <div className="flex justify-center items-center">
            <Image
               src={icon}
               width={28}
               height={28}
               alt={text}
            />
         </div>
         <div className={`${classNameText} ml-5 flex justify-center items-center`}>
            {text}
         </div>
      </div>
   )
}

const Register = () => {
   const router = useRouter()
   const [form] = Form.useForm()

   const onFinish = async (data: any) => {
      try {
         fetch('http://localhost:8000/api/auth/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         message.success('Đăng ký thành công')
         router.push('/auth/login') 
      } catch (error) {
         console.error('Đăng ký thất bại:', error)
         message.error('Đăng ký thất bại')
      }
   }

   return (  
      <div className="flex justify-center my-40">
         <div>
            <div className="mb-10">
               <h1 className="text-6xl font-medium">Tạo tài khoản</h1>
               <p className="text-sm text-gray-500 mt-5">Đã có tài khoản?
                  <Link href={'/auth/login'}>
                     <span className="text-green-600 font-semibold"> Đăng nhập</span>
                  </Link>
               </p>
            </div>
            <div className="flex justify-center">
               <div className="w-[530px]">
               <Form
                  name="basic"
                  onFinish={onFinish}
                  layout="vertical"
                  form={form}
               >
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item
                           className="text-[20px]"
                           label="Tên đăng nhập"
                           name="name"
                           rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                        >
                           <Input 
                              className="px-5 py-3 text-base" 
                           />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item
                           className="text-[20px]"
                           label="E-mail:"
                           name="email"
                           rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                        >
                           <Input 
                              className="px-5 py-3 text-base" 
                           />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item
                           className="text-[20px]"
                           label="Mật khẩu:"
                           name="password"
                           hasFeedback
                           rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                        >
                           <Input.Password 
                              className="px-5 py-3 text-base" 
                           />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item
                           className="text-[20px]"
                           label="Xác nhận mật khẩu:"
                           name="confirmPassword"
                           dependencies={['password']}
                           hasFeedback
                           rules={[{ required: true, message: 'Vui lòng nhập thông tin!' },
                              ({ getFieldValue }) => ({
                                 validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                       return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('Mật khẩu không khớp!'))
                                 },
                              })
                           ]}
                        >
                           <Input.Password 
                              className="px-5 py-3 text-base" 
                           />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item>
                           <Checkbox>Đồng ý với các điều khoản</Checkbox>
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={[15, 15]}>
                     <Col span={48} md={24}>
                        <Form.Item>
                           <Button className='bg-green-500 mt-2 flex justify-center items-center px-8 py-6' type="primary" htmlType="submit">Đăng ký</Button>
                        </Form.Item>
                     </Col>
                  </Row>
               </Form>
               </div>
               <div className="w-[465px] px-[50px] pt-[50px] pb-[30px] h-max ml-10 border border-gray-300 rounded-md">
                  <ShowAnother classNameText="font-semibold text-white" className="bg-blue-600" icon={imgLogin.facebook} text="Đăng ký bằng Facebook" />
                  <ShowAnother classNameText="font-semibold text-gray-500" className="bg-slate-200" icon={imgLogin.google} text="Đăng ký bằng Google" />
                  <ShowAnother classNameText="font-semibold text-white" className="bg-black" icon={imgLogin.twitter} text="Đăng ký bằng X" />
               </div>
            </div>
         </div>
      </div>
   )
}
 
export default Register