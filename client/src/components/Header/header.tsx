'use client'
import Image from "next/image"
import { useState, useEffect, useRef } from 'react'
import { imgHeader } from "../../../public"
import Navbar from "./Navbar/navbar"
import './header.css'
import Link from "next/link"
import { useRouter } from "next/navigation"
import OnTop from "../OnTop/ontop"
import { useDebounce } from 'use-debounce'


const arrItem : {title: string, icon: string}[] = [
   {title: 'Yêu thích', icon: imgHeader.btn_2},
   {title: 'Tài khoản', icon: imgHeader.btn_4},
]

const arrItemChild : {title: string, icon: string}[] = [
   {title: 'Trang cá nhân', icon: imgHeader.btn_4_1},
   {title: 'Nơi nhận hàng', icon: imgHeader.btn_4_2},
   {title: 'Mã giảm giá', icon: imgHeader.btn_4_3},
   {title: 'Yêu thích', icon: imgHeader.btn_4_4},
   {title: 'Cài đặt', icon: imgHeader.btn_4_5},
]

const arrDropItem : {title: string[]}[] = [
   {
      title: [
         'Danh Mục', 
         'Sữa bột', 
         'Rượu gạo', 
         'Ngũ Cốc', 
         'Thức ăn', 
         'Đồ ăn nhanh',
         'Nước có ga',
         'Rau củ',
         'Mì ống',
         'Kem sữa'
      ]
   }, {
      title: [
         'Vị trí hiện tại',
         'Hưng Yên',
         'Hải Phòng',
         'Thái Nguyên',
         'Hà Nội',
         'Phú Yên', 
         'Bắc Ninh',
         'Bắc Giang', 
         'Bắc Cạn',
         'Bắc Cầu',
      ]
   }
]

const ShowDropItem = ({className, arr} : {className: string, arr: string[]}) => {
   return (
      <div className={className}>
         <ul className="border rounded-md shadow-xl py-3">
            <li>
               <div>
                  <input className="outline-0 px-4 py-2 my-2 mx-6 border border-green-600 rounded-md" type="text" placeholder="Search..."/>
               </div>
            </li>
            <ul className="overflow-y-auto h-32">
               {arr.map((item: string, index: number) => (
                  <li className="py-1 px-9 hover:bg-green-600 hover:text-white hover:rounded"
                     key={index}>
                     {item}
                  </li>
               ))}
            </ul>
         </ul>
      </div>
   )
}

const ShowItemMenu = ({title, icon} : {title: string, icon: string}) => {
   return (
      <div className="flex items-center px-2 cursor-pointer">
         <Image className="h-max mr-1"
            src={icon}
            width={25}
            height={25}
            alt={`icon-${title}`}
         />
         <p>{title}</p>
      </div>
   )
}

const Header = () => {
   const [open1, setOpen1] = useState<boolean>(false)
   const [open2, setOpen2] = useState<boolean>(false)
   const [search, setSearch] = useState<boolean>(false)
   const [inputSearch, setInputSearch] = useState<string>('')
   const [debouncedInputSearch] = useDebounce(inputSearch, 500)
   const [data, setData] = useState<any>([])
   const menuRef = useRef<any>()
   const router = useRouter()

   const handleSearch = async (query: string) => {
      try {
         const res = await fetch(`http://localhost:8000/api/product?page=1&limit=20&orderBy=id&sortBy=asc&search=${query}`)
         if (res.ok) {
            const data = await res.json()   
            setData(data.data)                   
         } else {
            console.error('Error fetching')
         }
      } catch (error) {
         console.error('Error fetching:', error)
      }   
   }

   const handleLogout = () => {
      localStorage.clear()
      router.push('/auth/login')
   }

   const handleProductClick = () => {
      setSearch(false)
      setInputSearch('')
      setData([])
   }

   useEffect(() => {
      let handler = (e: any) => {
         if(!menuRef.current.contains(e.target)) {
            setOpen1(false)
            setOpen2(false)
         }    
      }
      document.addEventListener('mousedown', handler)

      return () => document.removeEventListener('mousedown', handler)
   }, [])

   useEffect(() => {
      if (debouncedInputSearch) {
         handleSearch(debouncedInputSearch)
      } else {
         setData([])
      }
   }, [debouncedInputSearch])

   return (  
      <header className="w-full">
         <div className="flex py-7">
            <div className="flex justify-start pl-5 basis-2/12">
               <Link href={'/'}>
                  <Image className="cursor-pointer"
                     src={imgHeader.logo}
                     width={180}
                     height={55}
                     alt="logo"
                  />
               </Link>
            </div>
            <div className="header__search-bg flex basis-5/12 items-center border rounded-md">
               <div className="header__all-cate relative flex justify-center basis-3/12 cursor-pointer h-full items-center"
                  ref={menuRef}>
                  <div className="flex justify-center h-full items-center" 
                     onClick={() => setOpen1(!open1)}>
                     <p className="text-base">Danh Mục</p>
                     <Image                         
                        src={imgHeader.drop}
                        width={14}
                        height={14}
                        alt="drop"
                     />
                  </div>
                  {open1 === true && 
                     <ShowDropItem 
                        className={`header__drop absolute left-0 top-14 z-10 bg-white ${open1 ? 'active' : 'inactive'}`}
                        arr={arrDropItem[0].title}
                     />
                  }
               </div>
               <div className="flex basis-9/12 relative">
                  <div className="w-4/5">
                     <input 
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        onClick={() => setSearch(!search)}
                        className="text-base pl-6 py-3 w-full outline-none" type="text" placeholder="Nhập thông tin cần tìm kiếm..."/>
                     <Image className="header__search absolute right-5 cursor-pointer"
                        src={imgHeader.search}
                        width={20}
                        height={20}
                        alt="search"
                     />
                  </div>
                  {search && (
                     <div className={`search__drop scroll-m-0 absolute top-14 w-full z-10 bg-white overflow-y-auto max-h-[300px] ${search ? 'active' : 'inactive'}`}>
                        {data.length > 0 ? (
                           data.map((item: any) => (
                              <Link href={`/product/${item.id}`} key={item.id} >
                                 <div className="flex items-center px-10 py-2 border-b"
                                    onClick={handleProductClick}
                                 >
                                    <div className="flex-shrink-0">
                                       <Image
                                          width={60}
                                          height={60}
                                          alt="product"
                                          src={item.image}
                                       />
                                    </div>
                                    <div className="ml-7">
                                       <div className="font-semibold">{item.name}</div>
                                       <div>{item.price} VNĐ</div>
                                    </div>
                                 </div>
                              </Link>
                           ))
                        ) : (
                           <div className="flex justify-center items-center w-full h-full">
                              {/* <p>Vui lòng nhập tên sản phẩm</p> */}
                           </div>
                        )}
                     </div>
                  )}
               </div>
            </div>
            <div className="flex basis-2/12 relative cursor-pointer justify-center items-center mx-4 my-2 rounded-md shadow-lg"
               ref={menuRef}>
               <div className="flex justify-center items-center"
                  onClick={() => setOpen2(!open2)}>
                  <Image className="h-max mr-2"
                     src={imgHeader.location}
                     width={16}
                     height={16}
                     alt="location-search"
                  />
                  <p>Chọn vị trí của bạn</p>
               </div>
               {
                  open2 === true && 
                  <ShowDropItem 
                     className={`header__drop absolute left-0 top-14 z-10 bg-white ${open2 ? 'active' : 'inactive'}`}
                     arr={arrDropItem[1].title}
                  />
               }
            </div>
            <div className="flex basis-4/12 justify-between pr-5 relative items-center">
               <Link href={'/cart'}>
                  <div className="flex items-center px-2 cursor-pointer">
                     <Image 
                        className="h-max mr-1"
                        src={imgHeader.btn_3}
                        height={24}
                        width={24}
                        alt="iamge cart"
                     />Giỏ hàng   
                  </div>
               </Link>
               <Link href={'/history'}>
                  <div className="flex items-center px-2 cursor-pointer">
                     <Image 
                        className="h-max mr-1"
                        src={imgHeader.btn_1}
                        height={24}
                        width={24}
                        alt="iamge cart"
                     />Đã đặt 
                  </div>
               </Link>
               {arrItem.map(({title, icon}: {title: string, icon: string}, index: number) => (
                  <div key={index} className="relative flex justify-center items-center h-full">
                     {title === 'Tài khoản' ? (
                        <div className="header__user-parent">
                           <Link href={'/myaccount'}>
                              <ShowItemMenu 
                                 title={title}
                                 icon={icon}   
                              />
                           </Link>
                           <div className="header__user-child bg-white z-50 absolute top-10 w-60 right-6 py-7 px-8 shadow-xl rounded-md">
                              <ul>
                                 {arrItemChild.map(({title, icon} : {title: string, icon: string}, index: number) => (
                                    <li className="flex cursor-pointer justify-start items-center py-1" 
                                       key={index}>
                                       <Image className="mr-2"
                                          src={icon}
                                          width={14}
                                          height={14}
                                          alt={`icon-${index}`}
                                       />
                                       <p>{title}</p>
                                    </li>
                                 ))}
                                 <li className="flex cursor-pointer justify-start items-center py-1" onClick={handleLogout}>
                                    <Image className="mr-2"
                                       src={imgHeader.btn_4_6}
                                       width={14}
                                       height={14}
                                       alt="icon-logout"
                                    />
                                    <p>Đăng xuất</p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     ) : (
                        <>
                           <ShowItemMenu 
                              title={title}
                              icon={icon}   
                           />
                        </>
                     )}
                  </div>
               ))}
            </div>
         </div>
         <Navbar />
         <OnTop />
      </header>
   );
}
 
export default Header