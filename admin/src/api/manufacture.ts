'use server'
import { revalidateTag } from 'next/cache'

export const handleGetManufactureData = async () => {
   const res = await fetch(`http://localhost:8000/api/manufacture/getall`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-manufactures")
   return await res.json()
}

export const handleCreateManufactureAction = async (data: any) => {
   const res = await fetch("http://localhost:8000/api/manufacture", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-manufactures")
}

export const handleUpdateManufactureAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/manufacture/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-manufactures")
}

export const handleDeleteManufactureAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/manufacture/${data.id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-manufactures")
}

export const handleSearchManufactureAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/manufacture?search=${data.name}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-manufactures")
}