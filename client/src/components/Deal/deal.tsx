'use client';
import { imgContainer } from "../../../public";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const CountDown = ({duration} : {duration: number}) => {
   const [time, setTime] = useState<number>(duration)

   let total_seconds: number = Math.floor(time / 1000)
   let total_minutes: number = Math.floor(total_seconds / 60)
   let total_hours: number = Math.floor(total_minutes / 60)
   let days: number = Math.floor(total_hours / 24)

   let seconds: number = total_seconds % 60
   let minutes: number = total_minutes % 60
   let hours: number = total_hours % 24

   useEffect(() => {
      if(time > 0) {
         setTimeout(() => {
            setTime(time - 1000)
         }, 1000)
      }
   }, [time])
   
   return (
      <div className="grid grid-cols-4 gap-2">
         <div className="justify-center bg-white z-10 p-2 text-lg rounded-md">
            <div className="flex justify-center">
               <span className=" items-center text-green-700">{days}</span>
            </div>
            <div className="flex justify-center">
               <p className="text-gray-500 text-sm">Days</p>
            </div>
         </div>
         <div className="justify-center bg-white z-10 p-2 text-lg rounded-md">
            <div className="flex justify-center">
               <span className=" items-center text-green-700">{hours}</span>
            </div>
            <div className="flex justify-center">
               <p className="text-gray-500 text-sm">Hours</p>
            </div>
         </div>
         <div className="justify-center bg-white z-10 p-2 text-lg rounded-md">
            <div className="flex justify-center">
               <span className=" items-center text-green-700">{minutes}</span> 
            </div>
            <div className="flex justify-center">
               <p className="text-gray-500 text-sm">Mins</p>
            </div>
         </div>
         <div className="justify-center bg-white z-10 p-2 text-lg rounded-md">
            <div className="flex justify-center">
               <span className=" items-center text-green-700">{seconds}</span>
            </div>
            <div className="flex justify-center">
               <p className="text-gray-500 text-sm">Sec</p>
            </div>
         </div>
      </div>
   )
}

const ShowDeal = ({time, name, img, manafacture, cate, priceCurrent, pricePast} : {cate: string, time: number, name: string, img: string, manafacture: string, priceCurrent: number, pricePast: number}) => {
   return (
      <div className="deal-main cursor-pointer countdown-page relative h-96">
         <Image className="rounded-xl" 
            src={img} 
            width={378}
            height={335}
            alt="img"
         />
         <div className="deal-content absolute top-1/3 rounded-xl p-4 mr-5">
            <CountDown duration={time} />
            <div className="p-6 bg-white mt-5 rounded-lg shadow-xl">
               <span className="text-xs text-gray-500 my-5">{cate}</span>
               <h1 className="product__text text-xl font-medium my-3">{name}</h1>
               <p className=" text-sm">By <span className="font-medium text-sm text-green-700">{manafacture}</span></p>
               <div className="mt-4 flex justify-between items-center">
                  <div className="">
                     <p className="text-sm line-through text-gray-500">{pricePast} VNĐ</p>
                     <p className="text-green-700 font-medium">{priceCurrent} VNĐ</p>
                  </div>
                  <div className="bg-green-600 flex px-4 py-2 text-white rounded">
                     <Image className="mr-2"
                        src={imgContainer.cart}
                        width={14}
                        height={14}
                        alt="cart"
                     />
                     Xem
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const Deal = () => {
   const arrDeals : {time: number, text: string, img: string, producter: string, cost: number, discount: number, cate: string}[] = [
      {
         time: 3 * 12 * 60 * 60 * 1000, 
         text: 'Seeds of Change Organic Quinoa, Brown, & Red Rice', 
         img: imgContainer.img_1, 
         producter: 'NestFood', 
         cost: 20000,
         discount: 40000,
         cate: 'NestMart'
      },
      {
         time: 2 * 20 * 60 * 60 * 1000, 
         text: 'Perdue Simply Smart Organics Gluten Free', 
         img: imgContainer.img_2, 
         producter: 'NestFood', 
         cost: 25.35,
         discount: 40000,
         cate: 'NestMart'
      },
      {
         time: 29 * 10 * 60 * 60 * 1000, 
         text: 'Signature Wood-Fired Mushroom and Caramelized', 
         img: imgContainer.img_3, 
         producter: 'NestFood', 
         cost: 43.25,
         discount: 40000,
         cate: 'NestMart'
      },
      {
         time: 7 * 24 * 60 * 60 * 1000, 
         text: 'Simply Lemonade with Raspberry Juice', 
         img: imgContainer.img_4, 
         producter: 'NestFood', 
         cost: 18.55,
         discount: 40000,
         cate: 'NestMart'
      },
   ];

   return (  
      <div className="grid grid-cols-4 mb-32">
         {arrDeals.map(({time, text, img, producter, cost, discount, cate} : {time: number, text: string, img: string, producter: string, cost: number, discount: number, cate: string}, index: number) => (
            <ShowDeal  
               key={index}
               time={time}
               name={text}
               img={img}
               manafacture={producter}
               priceCurrent={cost}
               pricePast={discount}
               cate={cate}
            />
         ))}
      </div>
   )
}
 
export default Deal;