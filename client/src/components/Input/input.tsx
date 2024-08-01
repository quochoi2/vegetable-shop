const ShowInput = ({text, className, type='text', value, onClick, onChange} : {onChange?: any, type?: string, value?: any, text?: string, className?:string, onClick?: void}) => {
   return (
      <div className="flex justify-start items-center">
         <input value={value} onChange={onChange} className={`${className} border rounded-lg w-full px-6 py-[18px] border-gray-400 active:border-green-600 outline-0`} id="username" name="username" type="text" placeholder={text} required />
      </div>
   )
}

export default ShowInput