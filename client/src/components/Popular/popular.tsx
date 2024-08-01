'use client'
import { Category, Product } from '../index'
import { Pagination } from 'antd'
import { useState, useEffect } from "react"
import Link from 'next/link'

export interface IProduct {
   id?: string,
   name?: string,
   image: string,
   category?: {
      name: string,
   }
   manufacture?: {
      name: string,
   }
   price?: number,
}

export const formatPrice = (price: any) => {
   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const PopularProduct = () => {
   const [products, setProducts] = useState<any>([])
   const [totalItems, setTotalItems] = useState<number>(0)
   const [page, setPage] = useState<number>(1)

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch(`http://localhost:8000/api/product?page=${page}&limit=10`)
            if (response.ok) {
               const data = await response.json()
               setProducts(data.data)
               setTotalItems(data.totalItems)                              
               console.log(data.data);
            } else {
               console.error('Error fetching')
            }
         } catch (error) {
            console.error('Error fetching:', error)
         }
      }

      fetchProducts()
   }, [page])

   const handleChangePage = (page: number) => {
      setPage(page)
   }

   return (  
      <div className="my-10">
         <Category title="Popular Products" text={['Tất cả', 'Sữa bột', 'Cà phê', 'Trà túi lọc', 'Rau củ', 'Kem tươi', 'Trái cây']} />
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
         <div className="flex justify-center items-center mt-10">
            <Pagination
               showSizeChanger
               current={page}
               defaultPageSize={10}
               total={totalItems}
               onChange={handleChangePage}
            />
         </div>
      </div>
   )
}
 
export default PopularProduct