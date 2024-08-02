'use client'
import { imgShop } from "../../../public"
import Image from "next/image"
import { Button, Table, TableColumnsType, Breadcrumb, Card, message, Popconfirm } from 'antd'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DeleteTwoTone, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { handleDeleteCartItem, handleUpdateCartItem } from "@/api/cartItem"


interface ICartProps {
   id: number
   image: string
   name: string
   price: number
   quantity: number
   total: number
   product: {
      name: string
      image: string
      price: number
   }
}

const Cart = () => {
   const router = useRouter()
   const [data, setData] = useState<ICartProps[]>([])

   const columns: TableColumnsType<ICartProps> = [
      {
         title: 'Ảnh',
         dataIndex: ['product', 'image'],
         className: 'w-[200px]',
         render: image => <Image className="w-[100px] h-[100px] p-[0]" width={100} height={100} src={`${image}`} alt="Product Image" />
      },
      {
         title: 'Tên',
         dataIndex: ['product', 'name'],
      },
      {
         title: 'Giá',
         dataIndex: ['product', 'price'],
         render: (price: number) => price.toLocaleString('vi-VN') + ' VNĐ'
      },
      {
         title: 'Số lượng',
         dataIndex: 'quantity',
         render: (quantity: number, record: ICartProps) => (
            <div className="flex items-center">
               <Button
                  icon={<MinusOutlined />}
                  onClick={() => { if (quantity > 1) handleQuantityChange(record.id, quantity - 1) }}
               />
               <span className="mx-2">{quantity}</span>
               <Button
                  icon={<PlusOutlined />}
                  onClick={() => handleQuantityChange(record.id, quantity + 1)}
               />
            </div>
         )
      },
      {
        title: 'Tổng',
        dataIndex: 'total',
        render: (total: number) => total.toLocaleString('vi-VN') + ' VNĐ'
      },
      {
         title: 'Hành động',
         align: "center",
         render: (text, record, index) => {
            return (
               <>
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

   const fetchCartItems = async () => {
      try {
         const cartId = localStorage.getItem('cartId')
         if (!cartId) {
            message.error('Bạn chưa đăng nhập tài khoản')
            router.push('/auth/login') 
         }
         
         const res = await fetch(`http://localhost:8000/api/cartItem/${cartId}`, {
            method: "GET",
            next: { tags: ["list-cartItems"] }
         })

         if (res.ok) {
            const data = await res.json()
            setData(data)
         } else {
            console.error('Error fetching cart items')
         }
      } catch (error) {
         console.error('Error fetching cart items:', error)
      }
   }

   const handleDeleteProduct = async (data: any) => {
      await handleDeleteCartItem({ id: data.id })
      message.success("Xoá thành công!")
      fetchCartItems()
   }

   const handleQuantityChange = async (id: number, newQuantity: number) => {
      const updatedData = data.map(item => {
         if (item.id === id) {
            const updatedItem = { ...item, quantity: newQuantity }            
            updatedItem.total = updatedItem.quantity * updatedItem.price
            return updatedItem
         }
         return item
      })
      setData(updatedData)
      await handleUpdateCartItem({ id, quantity: newQuantity })
      message.success("Cập nhật số lượng thành công!")
   }

   const handleSumOfPrice = () => {
      return data.reduce((sum, item) => sum + item.total, 0);
   }
  
   useEffect(() => {
      fetchCartItems()
      handleSumOfPrice()
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
                     { title: 'Trang chủ', href: '/' },
                     { title: 'Cửa hàng', href: '/client/product' },
                     { title: 'Giỏ hàng' },
                  ]} />
               </div>
               <div className="text-[40px] font-semibold">Giỏ hàng</div>
            </div>
         </div>

         <div className="m-10 flex">
            <div className=" basis-9/12 mr-10">
               <h1 className="text-3xl font-medium mb-5">Có tổng cộng: {data.length} sản phẩm</h1>
               {Array.isArray(data) && data.length > 0 ? (
                  <Table columns={columns} dataSource={data} />
               ): (
                  <div className="flex justify-center items-center text-xl font-medium mt-[100px]">Không có sản phẩm nào trỏng giỏ hàng của bạn</div>
               )}
            </div>
            <div className="basis-3/12">
               <Card title="Thông tin chi tiết" extra={<a href="#">Xem thêm</a>} className="w-full">
                  <h1 className="border-b border-b-gray-200">Mua hàng tại NestShop để nhận thêm nhiều ưu đãi</h1> <br />
                  <h1>Số lượng: {data.length}</h1> <br />
                  <h1 className="text-xl">Tổng: { handleSumOfPrice().toLocaleString('vi-VN') } VNĐ</h1>
               </Card>
               <Button className="bg-blue-500 mt-5" type="primary" onClick={() => router.push('/payment')}>
                  Thanh toán
               </Button>
            </div>
         </div>
      </div>
   )
}
 
export default Cart