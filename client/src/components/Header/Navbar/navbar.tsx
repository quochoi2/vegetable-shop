import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { imgNav } from "../../../../public";
import Image from "next/image";
import '../header.css';
import Link from "next/link";

interface IListItemNavNoChild {
   title: string
   icon: string
   child: string[]
}

interface IListItemNavWithChild {
   title: string
   icon: string
   child: {
      name: string
      href: string
   }[],
}

const ShowDeals = ({img, title} : {img: string, title: string}) => {
   return (
      <div className="flex p-5 cursor-pointer">
         <Image className="h-max mr-1"
            src={img}
            width={20}
            height={20}
            alt="logo-fire"
         />
         <p className=''>{title}</p>
      </div>
   )
}

const ShowListItemNavNoChild = ({title, icon, child} : IListItemNavNoChild) => {
   return (
      <div className="nav__parent-item flex p-5 relative cursor-pointer">
         <p className=''>{title}</p>
         <div className="flex justify-center items-center">
            <Image className="h-max ml-1"
               src={icon}
               width={12}
               height={12}
               alt={`icon-${title}`}
            />
         </div>
         <div className="nav__child-item absolute top-16 -left-2 z-10 bg-white rounded-md shadow-xl px-7 py-5 w-64">
            <ul>
               {child.map((item: string, index: number) => (
                  <li className="nav__item-child py-2" key={index}>
                     {item}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

const ShowListItemNavWithChild = ({
   title, 
   icon, 
   child
} : IListItemNavWithChild) => {
      return (
         <div className="nav__parent-item flex p-5 relative cursor-pointer">
            <p className=''>{title}</p>
            <div className="flex justify-center items-center">
               <Image className="h-max ml-1"
                  src={icon}
                  width={12}
                  height={12}
                  alt={`icon-${title}`}
               />
            </div>
            <div className="nav__child-item absolute top-16 -left-2 z-10 bg-white rounded-md shadow-xl px-7 py-5 w-64">
               <ul>
                  {child.map(({name, href} : {name: string, href: string}, index: number) => (
                     <li className="nav__item-child py-2" key={index}>
                        {
                           href ? <Link href={href}>{name}</Link> : name
                        }
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      )
} 

const Navbar = () => {
   const arrPage : {name: string, href: string}[] = [
      {
         name: 'Thông tin',
         href: '/about',
      },
      {
         name: 'Cửa hàng',
         href: '/product',
      },
      {
         name: 'Giỏ hàng',
         href: '/cart',
      },
      {
         name: 'Thanh toán',
         href: '/payment',
      },
      {
         name: 'Liên hệ',
         href: '/contact',
      },
      {
         name: 'Tài khoản',
         href: '/myaccount',
      },
      {
         name: 'Đăng nhập',
         href: '/auth/login',
      },
      {
         name: 'Đăng ký',
         href: '/auth/register',
      },
      {
         name: 'Bài viết',
         href: '/blog',
      },
   ]

   return (  
      <div className="nav__main flex justify-between px-5">
         <div className="flex relative justify-between items-center">
            <ShowDeals img={imgNav.fire} title="Nổi bất"/>
            <ShowListItemNavNoChild title="Trang chủ" icon={imgNav.drop} child={[
               'Trang chủ 1',
               'Trang chủ 2',
               'Trang chủ 3',
               'Trang chủ 4',
               'Trang chủ 5',
               'Trang chủ 6',
            ]}/>
            <div className="p-5 cursor-pointer">
               <Link href={'/purchaseguide'}>Thông tin</Link>
            </div>
            <ShowListItemNavNoChild title="Cửa hàng" icon={imgNav.drop} child={[
               'Gian hàng mùa Hạ',
               'Gian hàng mùa Thu',
               'Gian hàng mùa Xuân',
               'Gian hàng mùa Hè',
               'Gian hàng mùa Hạ',
            ]}/>
            <ShowListItemNavNoChild title="Nhà cung cấp" icon={imgNav.drop} child={[
               'Nhà cung cấp Viettle',
               'Nhà cung cấp Supo',
               'Nhà cung cấp Fanta',
               'Nhà cung cấp Ngũ Cốc',
               'Nhà cung cấp Cà Phê',
               'Nhà cung Á Nguyên',
            ]}/>
            <ShowListItemNavNoChild title="Chức năng mở rộng" icon={imgNav.drop} child={[
               'Nhà cung cấp Viettle',
               'Nhà cung cấp Supo',
               'Nhà cung cấp Fanta',
               'Nhà cung cấp Ngũ Cốc',
               'Nhà cung cấp Cà Phê',
               'Nhà cung Á Nguyên',
            ]}/>
            <ShowListItemNavNoChild title="Bài viết" icon={imgNav.drop} child={[
               'Bài viết nổi bật',
               'Bài viết đáng xem',
               'Bài viết xu hướng',
               'Bài viết theo mùa',
               'Bài viết sản phẩm',
               'Bài viết đánh giá',
            ]}/>
            <ShowListItemNavWithChild title="Trang" icon={imgNav.drop} child={arrPage} />
            <div className="p-5 cursor-pointer">
               <Link href={'/contact'}>Thông tin</Link>
            </div>
         </div>
         <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
               <Image 
                  src={imgNav.contact}
                  width={36}
                  height={36}
                  alt="contact"
               />
            </div>
            <div className="ml-2">
               <p className="text-green-600 font-semibold text-xl">
                  1900 - 888
               </p>
               <p className="text-gray-400 text-sm mb-1">24/7 Support Center</p>
            </div>
         </div>
      </div>
   );
}

export default Navbar;