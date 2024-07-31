'use server'
import { revalidateTag } from 'next/cache'

export const handleCreateProductAction = async (data: any) => {
   const res = await fetch('http://localhost:8000/api/product', {
      method: 'POST',
      body: data,
   })
   revalidateTag('list-products')
}

export const handleUpdateProductAction = async (data: any, dataUpdate: any) => {
   console.log(`http://localhost:8000/api/product/${data}`)
   const res = await fetch(`http://localhost:8000/api/product/${data}`, {
      method: "PUT",
      body: dataUpdate,
   })
   revalidateTag('list-products')
   return res.json()
}

export const handleDeleteProductAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/product/${data.id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag('list-products')
}

export const handleSearchProductAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/product?search=${data.name}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   const dataProduct = await res.json()
   revalidateTag('list-products')
   return dataProduct
}