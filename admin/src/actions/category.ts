'use server'
import { revalidateTag } from 'next/cache'

export const handleGetAllCategoryAction = async () => {
   const res = await fetch(`http://localhost:8000/api/category/getall`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-categories")
   return await res.json()
}

export const handleCreateCategoryAction = async (data: any) => {
   const res = await fetch("http://localhost:8000/api/category", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-categories")
}

export const handleUpdateCategoryAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/category/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-categories")
}

export const handleDeleteCategoryAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/category/${data.id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-categories")
   return res.json()
}

export const handleSearchCategoryAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/category?search=${data.name}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-categories")
}