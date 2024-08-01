const Category = ({title, text} : {title: string, text: string[]}) => {
   return (  
      <div className="flex">
         <div className="flex justify-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
         </div>
         <div className="flex jus ml-7">
            <ul className="flex justify-start items-center">
               {text.map((item: string, index: number) => (
                  <li className="px-2 text-lg hover:text-green-700 cursor-pointer" key={index}>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Category;