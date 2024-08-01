import Image from 'next/image';
import { imgContainer } from '../../../public';
import './slide.css';

const ShowSbusribe = () => {
   return (
      <div className="relative mt-10">
         <Image className="sub__img absolute z-10"
            src={imgContainer.plane}
            width={24}
            height={24}
            alt="sub"
         />
         <input className="relative outline-0 w-80 rounded-full py-5 px-16" type="text" placeholder="Địa chỉ giao hàng..." />
         <button className="sub__button absolute rounded-full py-5 px-10">
            Đăng ký
         </button>
      </div>
   )
}

const SlideShow = () => {
   return (
      <div className='relative'>
         <Image className='rounded-2xl w-full' 
            src={imgContainer.bg}
            width={1587}
            height={538}
            alt='background'
         />
         <div className='slide__text px-28 absolute w-2/3'>
            <h1 className='font-semibold text-6xl'>Rau củ với ưu đãi tốt nhất hiện nay</h1>
            <p className='text-gray-500 mt-5 text-3xl'>Giảm giá khi mua ngay</p>
            <ShowSbusribe />
         </div>
      </div>
   ) 
}
 
export default SlideShow;