export interface ICategory {
   id: number
   name: string
}

export interface IManufacture {
   id: number
   name: string
   email: string
}

export interface IProduct {
   id: number
   name: string
   image: string
   quantity?: number
   price: number
   category_id?: number
   manufacture_id?: number
}
