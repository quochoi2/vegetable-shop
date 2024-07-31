'use server'

export const handleGetAllStatistics = async () => {
   const res = await fetch(`http://localhost:8000/api/statistic/getall`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   return await res.json()
}

export const handleGetTopSell = async () => {
   const res = await fetch(`http://localhost:8000/api/statistic/gettopsell`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
   })
   return await res.json()
}
