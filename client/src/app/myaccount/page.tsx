'use client'
import Input from "antd/es/input/Input"
import { Select, Button } from "antd"
import { useState, useEffect } from "react"

const MyAccount = () => {
   const [users, setUsers] = useState<any>({
      name: '',
      gender: '',
      email: '',
      phone: '',
   })

   const handleGetUser = async () => {
      const userId = localStorage.getItem('userId')
      const res = await fetch('http://localhost:8000/api/user/' + userId, {
         method: 'GET'
      })
      const data = await res.json()
      setUsers(data)
   }

   useEffect(() => {
      handleGetUser()
      console.log(users);
   }, [])

   return (  
      <div className="mx-5 my-[35px] flex justify-center">
         <div className="">
            <h1 className="mb-[0px] text-[40px] font-medium">Xin chào {users.name}</h1> <br />
            <p>Tại đây bạn có thể sửa lại thông tin của chính bản thân theo ý của bạn để cập nhật thông tin cá nhân.</p>
            <p>Ấn lưu để lưu thông tin của tài khoản mới chỉnh sửa.</p>
            <div className="my-5">
               <div className="w-full">
                  <p>Tên: </p>
                  <Input 
                     placeholder="" 
                     className="px-4 py-2 "
                     value={users.name}
                     onChange={(e) => setUsers({ ...users, name: e.target.value })}
                  />
               </div>
               <div className="mt-5">
                  <Select 
                     className="w-full h-11" 
                     placeholder={'Chọn giới tính'}
                     value={users.gender}
                     onChange={(e) => setUsers({ ...users, gender: e })}
                  >
                     <Select.Option value="nam">Nam</Select.Option>
                     <Select.Option value="nu">Nữ</Select.Option>
                  </Select>
               </div>
               <div className=" mt-5">
                  <p>Địa chỉ email: </p>
                  <Input 
                     placeholder="" 
                     className="px-4 py-2"
                     value={users.email}   
                     onChange={(e) => setUsers({ ...users, email: e.target.value })}
                  />
               </div>
               <div className=" mt-5">
                  <p>Số điện thoại: </p>
                  <Input 
                     placeholder="" 
                     className="px-4 py-2"
                     value={users.phone}   
                     onChange={(e) => setUsers({ ...users, phone: e.target.value })}
                  />
               </div>
               <div className="mt-5 flex justify-end">
                  <Button type="primary" className=" bg-blue-500 px-10" htmlType="submit">
                     Cập nhật
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}
 
export default MyAccount