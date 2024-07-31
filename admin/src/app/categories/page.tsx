import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShowCategory from "./cateComponent/show.table"

export const metadata: Metadata = {
   title: "Danh mục",
}

const CateogryTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/category?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      next: { tags: ['list-categories'] }
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng danh mục" />
         <ShowCategory 
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
 
export default CateogryTable