import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import ShowUser from "./userComponent/show.table"

import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"

export const metadata: Metadata = {
  title: "Người dùng",
}

const UserTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/user?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      cache: "no-cache"
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng người dùng" />
         <ShowUser
            data={ data ? data.data : [] }
            meta={{
               current: +page,
               limit: limit,
               total: data.totalItems
            }}
         />
      </DefaultLayout>
   )
}
 
export default UserTable