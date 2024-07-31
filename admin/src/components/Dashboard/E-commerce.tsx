"use client"
import React from "react"
import ChartOne from "../Charts/ChartOne"
import ChartTwo from "../Charts/ChartTwo"
import ChatCard from "../Chat/ChatCard"
import TableOne from "../Tables/TableOne"
import CardDataStats from "../CardDataStats"
import { ShoppingCartOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons"
import { useState, useEffect } from 'react'
import { handleGetAllStatistics } from "@/actions/statistic"


export const formatNumber = (number: number) => {
	return number.toLocaleString('de-DE')  // 'de-DE' cho dấu chấm làm dấu phân cách hàng nghìn
}

const ECommerce: React.FC = () => {
	const [isTotalMoney, setIsTotalMoney] = useState<number>(0)
	const [isTotalOrder, setIsTotalOrder] = useState<number>(0)
	const [isTotalUser, setIsTotalUser] = useState<number>(0)

	const handleGetStatistic = async () => {
		const data = await handleGetAllStatistics()
		setIsTotalMoney(data.totalMoney)
		setIsTotalOrder(data.totalOrder.length)
		setIsTotalUser(data.totalUser.length)
	}

	useEffect(() => {
		handleGetStatistic()
	}, [isTotalMoney, isTotalOrder, isTotalUser])

	return (
		<>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
			<CardDataStats title="Tổng đơn hàng" total={formatNumber(isTotalOrder) + ' đơn hàng'} rate="4.35%" levelUp>
				<ShoppingCartOutlined style={{ cursor: "pointer", color: '#3B82F6', fontSize: '25px' }} />
			</CardDataStats>
			<CardDataStats title="Tổng doanh thu" total={formatNumber(isTotalMoney) + ' VNĐ'} rate="2.59%" levelUp>
				<DollarOutlined style={{ cursor: "pointer", color: '#3B82F6', fontSize: '25px' }} />
			</CardDataStats>
			<CardDataStats title="Tổng tài khoản" total={formatNumber(isTotalUser) + ' khách hàng'} rate="0.95%" levelDown>
				<UserOutlined style={{ cursor: "pointer", color: '#3B82F6', fontSize: '25px' }} />
			</CardDataStats>
			</div>

			<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-0 2xl:gap-7.5">
				{/* <ChartOne />
				<ChartTwo /> */}

				<div className="col-span-12 xl:col-span-8">
					<TableOne />
				</div>

				<ChatCard />
			</div>
		</>
	)
}

export default ECommerce
