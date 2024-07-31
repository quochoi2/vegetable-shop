import Image from 'next/image';
import React, { useState } from 'react'

const ImageUpload = () => {
   const [imageUrl, setImageUrl] = useState<string | null>(null);

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
         const reader = new FileReader()
         reader.onload = () => {
            setImageUrl(reader.result as string)
         }
         reader.readAsDataURL(file)
         console.log(file)
      }
   }
   

   return (
      <div style={{ textAlign: 'center' }}>
         <input type="file" accept="image/*" onChange={handleImageChange} />
         {imageUrl && (
            <Image
               src={imageUrl}
               alt="Preview"
               height={100}
               width={100}
               style={{ marginTop: 16, maxWidth: '100%', height: 'auto' }}
            />
         )}
      </div>
   )
}

export default ImageUpload
