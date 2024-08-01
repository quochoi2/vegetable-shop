import Link from "next/link";

const ButtonLink = ({className, text, href} : {className?: string, text: string, href: string}) => {
   return (
      <div className={`${className} cursor-pointer`}>
         <Link 
            className="px-8 py-4 border-0 bg-green-600 hover:bg-slate-700 hover:text-white rounded-md text-white"
            href={href}
         >
            {text}
         </Link>
      </div>
   )
}
 
export default ButtonLink;