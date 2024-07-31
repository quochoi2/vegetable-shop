import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title: "Thống kê",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
}

const StatisticPage = () => {
   return (
      <DefaultLayout>
         <Breadcrumb pageName="Thống kế" />

         <div className="flex flex-col gap-10">
            <ECommerce />
         </div>
      </DefaultLayout>
   )
}

export default StatisticPage
