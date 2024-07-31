import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShowManufacture from "./manuComponent/show.table"

export const metadata: Metadata = {
   title: "Nhà cung cấp",
}

const ManufactureTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/manufacture?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      next: { tags: ['list-manufactures'] }
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng nhà sản xuất" />
         <ShowManufacture 
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

export default ManufactureTable