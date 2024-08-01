import { imgContainer } from "../../../public";
import Category from "../Category/category";
import Image from "next/image";
import './feature.css';

const ShowItemFeature = ({img, title, quantity} : {img: string, title: string, quantity: string}) => {
   return (
      <div className="bg-slate-200 rounded-md py-5 cursor-pointer">
         <div className="flex justify-center">
            <Image
               src={img}
               width={80} 
               height={80}
               alt={`img-${img}`}
            />
         </div>
         <div className="flex justify-center">
            <h1 className="text-base font-medium">{title}</h1>
         </div>
         <div className="flex justify-center">
            <p className="text-sm text-gray-400">{quantity}</p>
         </div>
      </div>
   )
}

const ShowItemFeaShop = ({img, title} : {img: string, title: string}) => {
   return (
      <div className="relative">
         <Image className="rounded-md"
            src={img}
            width={512}
            height={300}
            alt="img"
         />
         <div className="fea__title-shop absolute">
            <h1 className="text-3xl mb-10 font-medium">{title}</h1>
            <div className="px-4 py-2 w-max bg-green-700 cursor-pointer text-white rounded-md">
               Xem ngay 
            </div>
         </div>
      </div>
   )
}

const FeatureCategory = () => {
   const arrFeaItem : {img: string, title: string, quantity: string}[] = [
      {
         img: imgContainer.fea_1, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_2, 
         title: 'Hambergur',
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_3, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_4, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_5, 
         title: 'Hambergur',
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_6, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_7, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_8, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_9, 
         title: 'Hambergur',
         quantity: '26 sản phẩm',
      },
      {
         img: imgContainer.fea_10, 
         title: 'Hambergur', 
         quantity: '26 sản phẩm',
      },
   ]; 

   const arrFeaShop : {img: string, title: string}[] = [
      {
         img: imgContainer.feas_1,
         title: 'Những sản phẩm tuyệt vời mỗi ngày'
      },
      {
         img: imgContainer.feas_2,
         title: 'Thức uống đảm bảo dinh dưỡng'
      },
      {
         img: imgContainer.feas_3,
         title: 'Rau củ sạch ngay tại nhà bạn'
      },
   ];

   return (
      <div className="my-10">
         <Category title='Danh mục sản phẩm' text={['Bánh và sữa', 'Cà phê và trà', 'Thức ăn cho thú cưng', 'Rau củ sạch',]}/>
         <div className="grid grid-cols-10 gap-5 mt-6">
            {arrFeaItem.map(({img, title, quantity} : {img: string, title: string, quantity: string}, index: number) => (
               <ShowItemFeature key={index} img={img} title={title} quantity={quantity} />
            ))}
         </div>
         <div className="grid grid-cols-3 gap-5 mt-8">
            {arrFeaShop.map(({img, title} : {img: string, title: string}, index: number) => (
               <ShowItemFeaShop key={index} img={img} title={title} />
            ))}
         </div>
      </div>  
   )
}
 
export default FeatureCategory;