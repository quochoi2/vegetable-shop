'use client'
import Image from "next/image"
import { imgShop } from "../../../public/index"
import { Select, Breadcrumb } from 'antd'
import { Pagination } from 'antd'
import { Deal, Product } from "@/components"
import { IProduct } from "@/components/Popular/popular"
import { formatPrice } from "@/components/Popular/popular"
import { useState, useEffect } from "react"
import Link from 'next/link'


const Shop = () => {
   const [products, setProducts] = useState<any>([])
   const [page, setPage] = useState<number>(1)
   const [totalItems, setTotalItems] = useState<number>(0)
   const [orderBy, setOrderBy] = useState<string>('id')
   const [sortBy, setSortBy] = useState<string>('desc')
   const [categories, setCategories] = useState<any[]>([])
   const [selectedCategory, setSelectedCategory] = useState<string>('')

   const fetchProducts = async () => {
      try {
         const response = selectedCategory
            ? await fetch(`http://localhost:8000/api/product/${selectedCategory}/bycate?page=${page}&limit=10&orderBy=${orderBy}&sortBy=${sortBy}`)
            : await fetch(`http://localhost:8000/api/product?page=${page}&limit=10&orderBy=${orderBy}&sortBy=${sortBy}`)
         if (response.ok) {
            const data = await response.json()
            setProducts(data.data)
            setTotalItems(data.totalItems)                              
         } else {
            console.error('Error fetching products')
         }
      } catch (error) {
         console.error('Error fetching products:', error)
      }
   }

   const fetchCategories = async () => {
      try {
         const response = await fetch('http://localhost:8000/api/category/getall')
         if (response.ok) {
            const data = await response.json()
            setCategories(data)
         } else {
            console.error('Error fetching categories')
         }
      } catch (error) {
         console.error('Error fetching categories:', error)
      }
   }

   useEffect(() => {
      fetchCategories()
      fetchProducts()
   }, [page, orderBy, sortBy, selectedCategory])

   const handleChangePage = (page: number) => {
      setPage(page)
   }

   const handleSortChange = (order: string, sort: string) => {
      setOrderBy(order)
      setSortBy(sort)
   }

   const handleCategoryChange = (value: string) => {
      setSelectedCategory(value)
      console.log(selectedCategory);
      
      setPage(1) 
   }

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
                     {
                        title: 'Trang chủ',
                        href: '/',
                     },
                     {
                        title: 'Cửa hàng',
                        href: '/',
                     },
                     {
                        title: 'Sản phẩm',
                        href: '/',
                     },
                  ]} />
               </div>
               <div className="text-[40px] font-semibold">Sản phẩm</div>
            </div>
         </div>
         
         <div className="my-5 flex">
            <div 
               className="px-5 hover:cursor-pointer hover:text-green-500"
               onClick={() => handleSortChange('name', 'asc')}
            >
               Tên từ A - Z
            </div>
            <div 
               className="px-5 hover:cursor-pointer hover:text-green-500"
               onClick={() => handleSortChange('name', 'desc')}
            >
               Tên từ Z - A
            </div>
            <div 
               className="px-5 hover:cursor-pointer hover:text-green-500"
               onClick={() => handleSortChange('price', 'desc')}
            >
               Giá từ cao đến thấp
               </div>
            <div 
               className="px-5 hover:cursor-pointer hover:text-green-500"
               onClick={() => handleSortChange('price', 'asc')}
            >
               Giá từ thấp đến cao
            </div>
            <div>
               <Select
                  className="mr-5"
                  style={{ width: 200 }}
                  placeholder="Chọn danh mục"
                  defaultValue={'Tất cả sản phẩm'}
                  onChange={handleCategoryChange}
                  value={selectedCategory || ''}
               >
                  <Select.Option value="">Tất cả sản phẩm</Select.Option>
                  {categories.map(category => (
                     <Select.Option key={category.id} value={category.id}>
                        {category.name}
                     </Select.Option>
                  ))}
               </Select>
            </div>
         </div>

         <div className="my-8">
            {products.length > 0 ? (
               <div className="grid grid-cols-5 gap-5 mt-5">
                  {products.map((product : IProduct) => (
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
            ) : (
               <div className="flex justify-center items-center">Không có sản phẩm nào</div> 
            )}
            <div className="flex justify-center items-center mt-10">
               <Pagination
                  showSizeChanger
                  current={page}
                  defaultPageSize={10}
                  pageSizeOptions={[10]}
                  total={totalItems}
                  onChange={handleChangePage}
               />
            </div>
         </div>
         <Deal />
      </div>
   )
}
 
export default Shop