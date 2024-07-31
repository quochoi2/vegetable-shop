import { BRAND } from "@/types/brand"
import Image from "next/image"
import { formatNumber } from "../Dashboard/E-commerce"
import { useState, useEffect } from 'react'
import { handleGetTopSell } from "@/actions/statistic"

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

const TableOne = () => {
	const [isData, setIsData] = useState<any>([])

	const handleGetSell = async() => {
		const data = await handleGetTopSell()
		setIsData(data)
	}

	useEffect(() => {
		handleGetSell()
	}, [])

	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
			<h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
				Sản phẩm bán chạy
			</h4>

			<div className="flex flex-col">
			<div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
				<div className="p-2.5 text-center xl:p-5">
					<h5 className="text-sm font-medium uppercase xsm:text-base">
						Tên
					</h5>
				</div>
				<div className="p-2.5 text-center xl:p-5">
					<h5 className="text-sm font-medium uppercase xsm:text-base">
						Ảnh
					</h5>
				</div>
				<div className="p-2.5 text-center xl:p-5">
					<h5 className="text-sm font-medium uppercase xsm:text-base">
						Giá
					</h5>
				</div>
				<div className="hidden p-2.5 text-center sm:block xl:p-5">
					<h5 className="text-sm font-medium uppercase xsm:text-base">
						Lượt mua
					</h5>
				</div>
				{/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
					<h5 className="text-sm font-medium uppercase xsm:text-base">
					Conversion
					</h5>
				</div> */}
			</div>

			{isData.map((item: any, key: number) => (
				<div
					className={`grid grid-cols-3 sm:grid-cols-5 ${
					key === isData.length - 1
						? ""
						: "border-b border-stroke dark:border-strokedark"
					}`}
					key={key}
				>
					<div className="flex items-center gap-3 p-2.5 xl:p-5">
						{/* <div className="flex-shrink-0">
							<Image src={item.logo} alt="Brand" width={48} height={48} />
						</div> */}
						<p className="hidden text-black dark:text-white sm:block">
							{item.product.name}
						</p>
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<div className="flex-shrink-0">
							<Image src={item.product.image} alt="Brand" width={48} height={48} />
						</div>					
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<p className="text-meta-3">{formatNumber(item.product.price)} VNĐ</p>
					</div>

					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<p className="text-black dark:text-white">{formatNumber(item.total_quantity)}</p>
					</div>
				</div>
			))}
			</div>
		</div>
	)
}

export default TableOne
