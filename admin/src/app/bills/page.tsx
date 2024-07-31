import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShowBill from "./billComponent/show.table"

export const metadata: Metadata = {
   title: "Hoá đơn",
}

const BillTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/bill?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      cache: "no-cache"
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng hoá đơn" />
         <ShowBill 
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
 
export default BillTable