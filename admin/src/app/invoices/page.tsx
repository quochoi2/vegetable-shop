
import { BRAND } from "@/types/brand"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"

import { Metadata } from "next"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShowInvoice from "./invoiceComponent/show.table"

export const metadata: Metadata = {
  title: "Hoá đơn nhập",
}

const brandData: BRAND[] = [
	{
		logo: "/images/brand/brand-01.svg",
		name: "Google",
		visitors: 3.5,
		revenues: "5,768",
		sales: 590,
		conversion: 4.8,
	},
	{
		logo: "/images/brand/brand-02.svg",
		name: "Twitter",
		visitors: 2.2,
		revenues: "4,635",
		sales: 467,
		conversion: 4.3,
	},
	{
		logo: "/images/brand/brand-03.svg",
		name: "Github",
		visitors: 2.1,
		revenues: "4,290",
		sales: 420,
		conversion: 3.7,
	},
	{
		logo: "/images/brand/brand-04.svg",
		name: "Vimeo",
		visitors: 1.5,
		revenues: "3,580",
		sales: 389,
		conversion: 2.5,
	},
	{
		logo: "/images/brand/brand-05.svg",
		name: "Facebook",
		visitors: 3.5,
		revenues: "6,768",
		sales: 390,
		conversion: 4.2,
	},
]

const InvoiceTable = async(props: any) => {
   const limit = 10
   const page = props?.searchParams?.page ?? 1
   const search = props?.searchParams?.search ?? ''

   const res = await fetch(`http://localhost:8000/api/invoice?page=${page}&limit=${limit}&search=${search}`, {
      method: "GET",
      cache: "no-cache"
   })
   const data = await res.json()

   return ( 
      <DefaultLayout>
         <Breadcrumb pageName="Bảng hoá đơn nhập" />
         <ShowInvoice 
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
 
export default InvoiceTable