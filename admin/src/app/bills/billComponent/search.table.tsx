'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const SearchBill = ({ search }: { search?: string }) => {
   const router = useRouter()
   const initialRender = useRef(true)

   const [text, setText] = useState(search)
   const [query] = useDebounce(text, 1000)

   useEffect(() => {
      if (initialRender.current) {
         initialRender.current = false
         return
      }

      if (!query) {
         router.push(`/bills`)
      } else {
         router.push(`/bills?search=${query}`)
      }
   }, [query])

   return (
      <div className='relative rounded-md shadow-sm'>
         <input
            value={text}
            placeholder='Tìm kiếm...'
            onChange={e => setText(e.target.value)}
            className='block w-[500px] rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 outline-0'
         />
      </div>
   )
}

export default SearchBill