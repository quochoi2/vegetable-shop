import Image from "next/image";
import { imgFooter } from "../../../public";
import './footer.css'

interface ItemProps {
   icon: string;
   title: string;
   addTitle: string;
}

interface ItemInProps {
   title: string;
   addTitle: string[];
}

export const ShowSubscribe = () => {
   return (
      <div className="relative mt-10">
         <Image className="sub__img absolute z-10"
            src={imgFooter.sub}
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

const ShowItem = ({icon, title, addTitle} : ItemProps) => {
   return (
      <div className="footer__item rounded-2xl flex p-5 ">
         <div className="flex justify-center items-center">
            <Image 
               src={icon}
               width={60}
               height={60}
               alt={`icon-${title}`}
            />
         </div>
         <div className="ml-3 justify-start items-center">
            <h1 className="mt-1 text-lg font-medium">{title}</h1>
            <p className="text-gray-500 text-sm">{addTitle}</p>
         </div>
      </div>
   )
}

const ShowItemIn = ({title, addTitle} : ItemInProps) => {
   return (
      <div>
         <h1 className="text-2xl font-medium mb-5">{title}</h1>
         <ul>
            {addTitle.map((item: string, index: number) => (
               <li className="py-2" key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

const ShowItemInfo = ({icon, title, addTitle} : ItemProps) => {
   return (
      <div className="flex justify-start items-center my-2">
         <Image 
            src={icon}
            width={16}
            height={16}
            alt={`icon-${title}`}
         />
         <h1 className="ml-1 text-lg font-medium">{title}</h1>
         <p className="text-sm text-gray-500">{addTitle}</p>
      </div>
   )
}

const Footer = () => {
   const arrItem : ItemProps[] = [
      {icon: imgFooter.item_1, title: 'Giá tốt nhất', addTitle: 'Đặt hàng với giá tốt nhất'},
      {icon: imgFooter.item_2, title: 'Giao dịch ngay', addTitle: 'Giao dịch hoạt động 24/7'},
      {icon: imgFooter.item_3, title: 'Hợp đồng rõ ràng', addTitle: 'Đăng ký với chúng tôi ngay'},
      {icon: imgFooter.item_4, title: 'Phân phối mọi nơi', addTitle: 'Kết hợp nhiều nhà phân phối'},
      {icon: imgFooter.item_5, title: 'Vận chuyển nhanh', addTitle: 'Vận chuyển dưới 3 ngày'},
   ];

   const arrItemInfo : ItemProps[] = [
      {icon: imgFooter.icon_i1, title: 'Địa chỉ: ', addTitle: '99 Hưng Yên-Việt Name-Châu Á'},
      {icon: imgFooter.icon_i2, title: 'Số liên hệ: ', addTitle: '(+84) 1900-6868'},
      {icon: imgFooter.icon_i3, title: 'Email: ', addTitle: 'NestMart@gmail.com'},
      {icon: imgFooter.icon_i4, title: 'Email: ', addTitle: 'Từ 5giờ-22giờ giờ các ngày trong tuần'},
   ];

   const arrIcon : string | any = [
      imgFooter.icon_b1,
      imgFooter.icon_b2,
      imgFooter.icon_b3,
      imgFooter.icon_b4,
      imgFooter.icon_b5,
   ];

   return (  
      <footer className="relative px-5">
         <div className="relative">
            <div className="relative">
               <Image className="w-full rounded-2xl"
                  src={imgFooter.bg}
                  width={1500}
                  height={450}
                  alt="bg"   
               />
               <Image className="absolute bottom-0 right-0"
                  src={imgFooter.banner}
                  width={635}
                  height={345}
                  alt="banner"
               />
            </div>
            <div className="footer__text-banner absolute w-1/2 px-20">
               <h1 className="text-4xl mb-5 font-semibold">Hãy đặt hàng ngay tại nhà và chúng tôi sẽ giao hàng đến bạn</h1>
               <p className="text-gray-500">Bắt đầu đặt hàng nay tại đây với <span className="footer__text">Nest Mart</span></p>
               <ShowSubscribe />
            </div>
         </div>
         <div className="grid grid-cols-5 gap-5 py-10">
            {arrItem.map(({icon, title, addTitle} : ItemProps, index: number) => (
               <ShowItem key={index}
                  icon={icon}
                  title={title}
                  addTitle={addTitle}
               />
            ))}
         </div>
         <div className="flex">
            <div>
               <Image 
                  src={imgFooter.logo}
                  width={215}
                  height={66}
                  alt="logo"
               />
               <p className="my-5">Nơi tuyệt vời nhất để mua hàng</p>
               {arrItemInfo.map(({icon, title, addTitle} : ItemProps, index: number) => (
                  <ShowItemInfo 
                     key={index}
                     icon={icon}
                     title={title}
                     addTitle={addTitle}
                  />
               ))}
            </div>
            <div className="grid grid-cols-4 gap-10 mx-14">
               <ShowItemIn title="Công ty" addTitle={['Tìm hiểu thêm', 'Thông tin giao hàng', 'Các chính sách', 'Hệ thống trung chuyển', 'Liên hệ với chúng tôi', 'Trung tâm hỗ trợ', 'Đảm bảo danh tính']}/>
               <ShowItemIn title="Tài khoản" addTitle={['Đăng nhập', 'Giỏ hàng', 'Danh sách yêu thích', 'Theo dõi đơn hàng', 'Hỗ trợ thông tin', 'Chi tiết đơn hàng', 'Quản lý sản phẩm']}/>
               <ShowItemIn title="Đối tác" addTitle={['Trở thành nhà bán', 'Chương trình tuyển dụng', 'Cơ hội kinh doanh', 'Đảm bảo lợi ích', 'Liên kết nhà cung cấp', 'Toàn quyển tự do bán', 'Thanh toán minh bạch']}/>
               <ShowItemIn title="Phổ biến" addTitle={['Sữa và Kem tươi', 'Bơ và đậu phộng', 'Trứng các loại', 'Rau xanh đảm bảo', 'Trà xanh đóng túi', 'Phô mai các loại', 'Cà phê hộp']}/>
            </div>
            <div>
               <h1 className=" text-xl font-medium">Cài đặt ứng dụng</h1>
               <p className="text-gray-500 my-5">Từ App Store và Google Play</p>
               <div className="flex">
                  <Image src={imgFooter.ios} width={128} height={43} alt="ios"/>
                  <Image className="ml-3" src={imgFooter.chp} width={128} height={43} alt="ch"/>
               </div>
               <p className="text-gray-500 my-5">Các hình thức thanh toán</p>
               <Image src={imgFooter.pay} width={225} height={32} alt="Thanh toán"/>
            </div>
         </div>
         <div className="footer__bottom mt-7 py-8 flex justify-between items-center">
            <div>
               <p>© 2024,<span className="text-green-600"> Nest</span> - HTML Ecommerce Template</p>
               <p>All rights reserved</p>
            </div>
            <div className="flex">
               <div className="flex">
                  <div className="flex justify-center items-center">
                     <Image className="mr-2" src={imgFooter.phone} width={30} height={37} alt="sdt 1"/>
                  </div>
                  <div>
                     <p className="text-xl text-green-600 font-semibold">1900 - 8888</p>
                     <p className="text-sm text-gray-500">Hoạt động từ 6:00 - 23:00</p>
                  </div>
               </div>
               <div className="flex ml-7">
                  <div className="flex justify-center items-center">
                     <Image className="mr-2" src={imgFooter.phone} width={30} height={37} alt="sdt 2"/>
                  </div>
                  <div>
                     <p className="text-xl text-green-600 font-semibold">1900 - 8888</p>
                     <p className="text-sm text-gray-500">Hỗ trợ liên tục 24/7</p>
                  </div>
               </div>
            </div>
            <div>
               <div className="flex justify-start items-center">
                  <p className=" text-lg font-semibold">Theo dõi: </p>
                  <ul className="flex ml-5">
                     {arrIcon.map((item: string, index: number) => (
                        <li className="cursor-pointer mx-2 p-2 rounded-full bg-green-600" key={index}>
                           <Image src={item} width={16} height={16} alt={`${index}`}/>
                        </li>  
                     ))}
                  </ul>
               </div>
               <p>Nhận khuyến mãi từ các kênh theo dõi chính thống</p>
            </div>
         </div>
      </footer>
   );
}
 
export default Footer;