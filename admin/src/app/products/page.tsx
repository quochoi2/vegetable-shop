import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShowProduct from "./prodComponent/show.table"

export const metadata: Metadata = {
   title: "Sản phẩm",
}

const ProductTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/product?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      next: { tags: ['list-products'] }
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng sản phẩm" />
         <ShowProduct 
            data={ data ? data.data : [] }
            meta={{
               current: page,
               limit: limit,
               total: data.totalItems
            }}
         />
      </DefaultLayout>
   )
}
 
export default ProductTable