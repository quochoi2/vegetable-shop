'use client'
import Slider from "react-slick"
import Image from 'next/image'
import { imgContainer, imgDetail, imgFooter, imgHeader } from '../../../../public'
import { useState, useEffect } from 'react'
import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { message } from 'antd'
import Link from 'next/link'
import { Product } from '@/components'
import { IProduct } from '@/components/Popular/popular'
import { formatPrice } from '@/components/Popular/popular'


interface ICateItem {
   icon: string
   text: string
   quantity: number
}

interface INewProduct {
   img: string
   name: string
   price: string
}

const ShowCateItem = ({icon, text, quantity} : ICateItem) => {
   return (
      <div className='flex justify-between border-gray-300 border rounded-md my-5 p-4'>
         <div className='flex'>
            <div className='flex justify-center items-center w-max h-max'>
               <Image 
                  src={icon}
                  width={36}
                  height={36}
                  alt={`${icon}`}
               />
            </div>
            <div className='flex justify-center items-center ml-2'>
               <p className='text-base'>{text}</p>
            </div>
         </div>

         <div className='flex justify-center items-center p-2 bg-green-600 rounded-full'>
            <p className='text-white text-sm'>{quantity}</p>
         </div>
      </div>
   )
}

const ShowNewProduct = ({img, name, price} : INewProduct) => {
   return (
      <div className='flex border-gray-300 border rounded-md my-5'>
         <div className='flex justify-center items-center w-max h-max'>
            <Image 
               src={img}
               width={80}
               height={80}
               alt='icon'
            />
         </div>
         <div className='ml-3 items-center leading-[50px]'>
            <p className='text-green-600 font-semibold text-[20px]'>{name}</p>
            <p className='text-gray-400 text-sm'>{price}</p>
         </div>
      </div>
   )
}

const ProductDetail = () => {   
   const router = useRouter()
   const pathname = usePathname()
   const [product, setProduct] = useState<any>()
   const [quantity, setQuantity] = useState<number>(1)   
   const [productRelated, setProductRelated] = useState<any>([])
   const [page, setPage] = useState<number>(1)
   const [totalItems, setTotalItems] = useState<number>(0)

   const handleChangePage = (page: number) => {
      setPage(page)
   }

   const handleShowProductByCate = async (categoryId: number) => {
      try {
         const response = await fetch(`http://localhost:8000/api/product/${categoryId}/bycate?page=${page}&limit=4`)
         if (response.ok) {
            const data = await response.json()
            setProductRelated(data.data)
            setTotalItems(data.totalItems)                              
         } else {
            console.error('Error fetching related products')
         }
      } catch (error) {
         console.error('Error fetching related products:', error)
      }   
   }

   const handleAddToCart = async () => {
      try {
         const cartId = localStorage.getItem('cartId')
         if (!cartId) {
            message.error('Vui lòng đăng nhập hoặc tạo giỏ hàng trước khi thêm sản phẩm vào giỏ hàng')
            router.push('/auth/login')
         }

         const getAllCartItems = await fetch(`http://localhost:8000/api/cartItem/${cartId}`, {
            method: 'GET',
         })
         const listCartItems = await getAllCartItems.json()         
         const check = listCartItems.some((item: any) => item.product_id === product.id)         
         
         if (check) {
            const cartItemId = listCartItems.find((item: any) => item.product_id === product.id).id
            const cartItemQuantity = listCartItems.find((item: any) => item.product_id === product.id).quantity
            
            const resUpdate = await fetch(`http://localhost:8000/api/cartItem/${cartItemId}`, {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({ quantity: quantity + cartItemQuantity })
            })

            if (resUpdate.ok) {
               message.success('Đã cập nhật số lượng sản phẩm trong giỏ hàng')
            } else {
               message.error('Cập nhật số lượng sản phẩm thất bại')
            }

         } else {
            const res = await fetch('http://localhost:8000/api/cartItem', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  cart_id: cartId,
                  product_id: product.id,
                  quantity: quantity,
                  price: product.price,
               })
            })
            const data = await res.json()
            
            if (res.ok) {
               message.success('Đã thêm sản phẩm vào giỏ hàng')
            } else {
               message.error('Thêm sản phẩm thất bại')
            }
         }
      } catch (error) {
         message.error('Thêm sản phẩm vào giỏ hàng thất bại')
      }
   }

   const fetchProductDetail = async () => {
      try {
         const response = await fetch(`http://localhost:8000/api/${pathname}`)
         if (response.ok) {
            const data = await response.json()
            setProduct(data)
            handleShowProductByCate(data.category_id)            
         } else {
            console.error('Error fetching product detail')
         }
      } catch (error) {
         console.error('Error fetching product detail:', error)
      }
   }

   useEffect(() => {
      fetchProductDetail()
   }, [page])

   const arrCateItem : ICateItem[] = [
      { icon: imgFooter.item_1, text: 'Rau củ', quantity: 30 },
      { icon: imgFooter.item_2, text: 'Nước ép', quantity: 36 },
      { icon: imgFooter.item_3, text: 'Trái cây', quantity: 40 },
      { icon: imgFooter.item_4, text: 'Đồ hộp', quantity: 57 },
   ]

   const arrNewProduct : INewProduct[] = [
      { img: imgDetail.img_1, name: 'Nước ép cam', price: '20.000 VNĐ' },
      { img: imgDetail.img_2, name: 'Trái cây', price: '70.000 VNĐ' },
      { img: imgDetail.img_3, name: 'Rau củ sạch', price: '50.000 VNĐ' },
   ]

   return (
      <div className='flex justify-center p-10'>
         <div className='basis-4/5'>
            <div className='flex'>
               <div className='relative flex justify-center items-center basis-1/2 border rounded-xl border-gray-300'>
                  <Image className='w-[600px] h-[600px]'
                     width={600}
                     height={600}
                     src={product?.image}
                     alt='detail'
                  />
                  <div>
                     <Image className='absolute top-2 right-2'
                        src={imgHeader.search}
                        width={24}
                        height={24}
                        alt='zoom'
                     />
                  </div>                  
               </div>

               {/* infor */}
               <div className='basis-1/2 mx-10'>
                  <h1 className='text-[40px] leading-[48px]'>{product?.name}</h1>
                  <p className='text-[40px] text-green-700 font-bold my-6'>{product?.price.toLocaleString('vi-VN')} VNĐ<span className='line-through text-base ml-5 text-gray-400 font-normal'> 60.000 VNĐ</span></p>
                  <p className='text-gray-400'>Khám phá là bản năng của mỗi đứa trẻ. Được thỏa sức khám phá, hành trang khôn lớn của trẻ sẽ 
                     càng thêm vững vàng và mạnh mẽ hơn. Và mẹ hãy luôn ở tâm thế sẵn sàng trở thành người bạn 
                     đồng hành thân thiết, trang bị cho con một sức khỏe từ bên trong để khám phá thế giới nhé! Friso® 
                     Gold - với nguồn sữa mát 100% từ Hà Lan, giúp con tự tin lớn khôn trên mọi bước đi trong hành 
                     trình khôn lớn.
                  </p>
                  <div className='flex justify-start items-center my-8'>
                     <p className='text-xl'>Loại: </p>
                     <div className={`items-center cursor-pointer mx-2 p-2 rounded-md bg-green-600 text-white`}>50g</div>
                     <div className={`items-center cursor-pointer mx-2 p-2 rounded-md bg-green-600 text-white`}>60g</div>
                     <div className={`items-center cursor-pointer mx-2 p-2 rounded-md bg-green-600 text-white`}>70g</div>
                     <div className={`items-center cursor-pointer mx-2 p-2 rounded-md bg-green-600 text-white`}>80g</div>
                  </div>
                  <div className='flex'>
                     <div className='relative'>
                        <input className='p-4 w-[80px] outline-0 border border-gray-400 rounded-md text-xl' type='number' value={quantity} readOnly />
                        <div onClick={() => {if(quantity > 1) setQuantity(quantity - 1)}} className='absolute bottom-[2px] left-[47px] w-[29px] p-2 cursor-pointer'>
                           <Image className=''
                              src={imgDetail.minus}
                              width={14}
                              height={14}
                              alt='minus'
                           />
                        </div>
                        <div onClick={() => setQuantity(quantity + 1)} className='absolute p-3 top-0 right-0 cursor-pointer'>
                           <Image className=''
                              src={imgDetail.plus}
                              width={14}
                              height={14}
                              alt='plus'
                           />
                        </div>
                     </div>
                     <div className='flex justify-center items-center px-7 py-3 rounded-md ml-5 bg-green-600 cursor-pointer hover:bg-gray-600'
                        onClick={handleAddToCart}
                     >
                        <Image 
                           src={imgContainer.cart}
                           width={20}
                           height={20}
                           alt='cart'
                        />
                        <p className='text-white ml-2'>Thêm vào giỏ hàng</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* description */}
            <div className='mt-10 px-10 '>
               <h1 className='text-[40px] font-semibold mb-5'>Mô tả</h1>
               <div>
                  <p className='text-gray-400'>Không phun thuốc trừ sâu, vì thuốc trừ sâu có chứa nhiều gốc hóa học như DDT, 666, thủy ngân... 
                     gây độc hại cho cơ thể. Phun thuốc trừ sâu bừa bãi làm độc tố tồn dư trong đất cao và nguy hại 
                     hơn nữa là chúng hòa tan vào các nguồn nước sinh hoạt cho người sử dụng. Hiện nay, việc sử dụng 
                     phân hữu cơ hoai, mục, phân vi sinh tổng hợp, ứng dụng các biện pháp phòng trừ dịch bệnh tổng hợp 
                     (IPM) đối với sản xuất nông nghiệp nói chung và với rau nói riêng đang được khuyến khích. Với 
                     thuốc trừ sâu, không nên mua các loại thuốc không rõ nguồn gốc.
                  </p>
                  <p className='text-gray-400 mt-5'>Không nên thu hoạch ngay sau khi bón phân, hoặc nhất là khi mới phun thuốc trừ sâu. Mỗi loại thuốc 
                     đều có thời gian phân giải, phân hủy an toàn khác nhau, cho nên thời gian thu hoạch cũng khác nhau. 
                     Tuyệt đối không được thu hoạch rau ngay sau khi phun thuốc trừ sâu. Phải bảo đảm đủ thời gian phân 
                     hủy sau khi phun, tưới mới được thu hoạch và mang bán.
                  </p>
                  <div className='mt-10'>
                     <div className='grid grid-cols-4 gap-5'>
                        {productRelated.map((product : IProduct) => (
                           <Link href={`/product/${product.id}`} key={product.id}>
                              <Product 
                                 name={product.name}
                                 image={product.image}
                                 category={product.category}
                                 manufacture={product.manufacture}
                                 price={formatPrice(product.price)}
                              />
                           </Link>
                        ))}
                     </div>
                     <div className='mt-10 flex justify-center items-center'>
                        <Pagination
                           showSizeChanger
                           current={page}
                           defaultPageSize={4}
                           pageSizeOptions={[4]}
                           total={totalItems}
                           onChange={handleChangePage}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='basis-1/5'>
            <div className='border border-gray-300 rounded-lg p-[30px] shadow-xl'>
               <div className='flex justify-start w-full border-b-[1px] border-gray-300'>
                  <h1 className='text-2xl font-medium pb-5'>Danh mục</h1>
               </div>
               <div>
                  {arrCateItem.map(({icon, text, quantity} : ICateItem, index: number) => (
                     <ShowCateItem key={index} icon={icon} text={text} quantity={quantity} />
                  ))}
               </div>
            </div>
            <div className='border border-gray-300 rounded-lg p-[30px] shadow-xl mt-10'>
               <div className='flex justify-start w-full border-b-[1px] border-gray-300'>
                  <h1 className='text-2xl font-medium pb-5'>Sảnp phẩm mới</h1>
               </div>
               <div>
                  {arrNewProduct.map(({img, name, price} : INewProduct, index: number) => (
                     <ShowNewProduct key={index} img={img} name={name} price={price} />
                  ))}
               </div>
            </div>
            <div className='mt-10'>
               <Image className='rounded-xl'
                  src={imgDetail.banner}
                  width={345}
                  height={365}
                  alt='banner'
               />
            </div>
         </div>
      </div>
   )
}

export default ProductDetail