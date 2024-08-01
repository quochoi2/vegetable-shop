'use client'
import Image from "next/image"
import { imgShop } from "../../../public"
import { Breadcrumb, message } from "antd"
import {
   Button,
   Form,
   Input,
   Select,
} from 'antd'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface IUserProps {
   name?: string
   phone?: string
   address?: string
}

const formItemLayout = {
   labelCol: {
     xs: { span: 24 },
     sm: { span: 6 },
   },
   wrapperCol: {
     xs: { span: 24 },
     sm: { span: 14 },
   },
}

const Payment = () => {
   const router = useRouter()
   const [userData, setUserData] = useState<IUserProps>() 

   const fetchUser = async() => {
      const userId = localStorage.getItem('userId')
      if (!userId) {
         message.error('Bạn chưa đăng nhập tài khoản')
         router.push('/auth/login') 
      }

      const res = await fetch(`http://localhost:8000/api/user/${userId}`, {
         method: "GET",
      })
      
      if (res.ok) {
         const data = await res.json()
         setUserData(data)
      } else {
         console.error('Error fetching cart items')
      }
   }

   const handleAddItemToBillDetail = async (id: any) => {
      const cartId = localStorage.getItem('cartId')
      if (!cartId) {
         message.error('Vui lòng đăng nhập hoặc tạo giỏ hàng trước khi thêm sản phẩm vào giỏ hàng')
         router.push('/auth/login') 
      }

      const getAllCartItems = await fetch(`http://localhost:8000/api/cartItem/${cartId}`, {
         method: 'GET',
      })
      const listCartItems = await getAllCartItems.json()

      for (const item of listCartItems) {
         const billDetailData = {
            bill_id: id,
            product_id: item.product_id,
            quantity: item.quantity,
            total: item.total
         }

         await fetch('http://localhost:8000/api/billDetail', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(billDetailData)
         })  
         
         await fetch(`http://localhost:8000/api/cartItem/${item.id}`, {
            method: 'DELETE',
         })  
      } 
   }

   const handleOrder = async (values: any) => {
      try {
         const userId = localStorage.getItem('userId')
         
         const billData = { user_id: userId, ...values }

         const res = await fetch(`http://localhost:8000/api/bill`, {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(billData)
         })

         if (res.ok) {
            const resBill = await res.json()            
            handleAddItemToBillDetail(resBill.data.id)
            message.success('Đặt hàng thành công')
            router.push('/')
         } else {
            message.error('Đặt hàng thất bại')
         }
      } catch (error) {
         message.error('Đặt hàng thất bại')
      }
   }

   useEffect(() => {
      fetchUser()
   }, [])   

   return (  
      <div className="mx-5 my-[35px]">
         <div className="relative">
            <Image className="rounded-2xl"
               src={imgShop.header}
               width={1590}
               height={220}
               alt="header-bg"
            />
            <div className="absolute top-0 w-full flex justify-between px-20 py-[87px]">
               <div className="flex justify-center items-center">
                  <Breadcrumb className="text-base" separator=">" items={[
                     { title: 'Trang chủ', href: '/', },
                     { title: 'Cửa hàng', href: '/client/product', },
                     { title: 'Giỏ hàng', href: '/client/cart', },
                     { title: 'Thanh toán', },
                  ]} />
               </div>
               <div className="text-[40px] font-semibold">Thanh toán</div>
            </div>
         </div>

         <Form 
            {...formItemLayout} 
            variant="filled" 
            onFinish={handleOrder}
            style={{ maxWidth: 1500 }} 
            className="mt-10"
            fields={[
               { name: ['name'], value: userData?.name },
               { name: ['phone'], value: userData?.phone },
               { name: ['address'], value: userData?.address },
               { name: ['method'], value: 'Thanh toán tại nhà' },
            ]}
         >
            <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}>
               <Input placeholder="Tên người nhận..." />
            </Form.Item>

            <Form.Item
               label="Số điện thoại"
               name="phone"
               rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
            >
               <Input placeholder="Nhập số điện thoại..." />
            </Form.Item>

            <Form.Item
               label="Địa chỉ"
               name="address"
               rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
            >
               <Input placeholder="Nhập địa chỉ..." />
            </Form.Item>

            <Form.Item
               label="Mô tả"
               name="description"
               rules={[{ required: false }]}
            >
               <Input.TextArea placeholder="Ghi chú thêm..." />
            </Form.Item>

            <Form.Item label="Hình thức thanh toán" name="method" rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}>
               <Select>
                  <Select.Option value="Thanh toán tại nhà">Thanh toán tại nhà</Select.Option>
                  <Select.Option value="Chuyển khoản điện tử">Chuyển khoản điện tử</Select.Option>
               </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 12 }} className="flex justify-end">
               <Button type="primary" className=" bg-blue-500 px-10" htmlType="submit">
                  Đặt hàng
               </Button>
            </Form.Item>
         </Form>
      </div>
   )
}
 
export default Payment