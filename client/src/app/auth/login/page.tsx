'use client'
import { Button, Input, Form, message, Row, Col } from "antd"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Checkbox } from 'antd'
import { imgLogin } from "../../../../public"
import Link from "next/link";

const Login = () => {
   const router = useRouter()
   const [form] = Form.useForm()

   const handleCreateCart = async(rawData: any) => {
      const resCart = await fetch('http://localhost:8000/api/cart', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
         },
         body: JSON.stringify({ user_id: rawData })
      })
      const resCartData = await resCart.json()
      const { data } = resCartData
      
      localStorage.setItem('cartId', data.id)
   }

   const onFinish = async (data: any) => {
      try {
         const res = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         })

         if (res.ok) {
            const resData = await res.json()
            const { userId, token } = resData 
            localStorage.setItem('userId', userId)
            localStorage.setItem('token', token)      

            await handleCreateCart(userId)

            message.success('Đăng nhập thành công')
            router.push('/') 
         } else {
            const errorData = await res.json()
            console.error('Đăng nhập thất bại:', errorData.message)
            message.error('Đăng nhập thất bại')
         }
      } catch (error) {
         console.error('Đăng nhập thất bại:', error)
         message.error('Đăng nhập thất bại')
      }
   }

   return (  
      <div className="flex justify-center my-40">
         <div className="flex justify-center items-center">
            <Image className="rounded-xl"
               src={imgLogin.img}
               width={495}
               height={580}
               alt="login"
            />
         </div>
         <div className="ml-10 w-[500px]">
            <h1 className="text-6xl font-medium">Đăng nhập</h1>
            <p className="text-sm text-gray-500 mt-5 mb-10">Không có tài khoản?
               <Link href={'/auth/register'}>
                  <span className="text-green-700 font-semibold cursor-pointer"> Tạo ngay</span>
               </Link>
            </p>
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
                     <Form.Item>
                        <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={[15, 15]}>
                  <Col span={48} md={24}>
                     <Form.Item>
                        <Button className='bg-green-500 mt-2 flex justify-center items-center px-8 py-6' type="primary" htmlType="submit">Đăng nhập</Button>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </div>
      </div>
   )
}
 
export default Login
