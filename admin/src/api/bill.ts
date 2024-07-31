'use server'
import { revalidateTag } from 'next/cache'

export const handleViewBillAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/billDetail/${data.id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-bills")
}

export const handleUpdateBillAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/bill/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-bills")
}

export const handleDeleteBillAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/bill/${data.id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-bills")
}

export const handleSearchBillAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/bill?search=${data.name}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag("list-bills")
}

export const handleDeleteBillDetailAction = async (data: any) => {
   const res = await fetch(`http://localhost:8000/api/billDetail/${data.id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   revalidateTag('list-billDetails')
}
