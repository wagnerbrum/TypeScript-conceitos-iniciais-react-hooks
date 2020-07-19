import { createContext } from 'react'

interface Product {
    id: number
    name: string
    price: number
}

interface Cart {
    products: Product[]
    shipping_value?: number
}

const initialValue: Cart = { products: [] }

const CartContext = createContext<Cart>(initialValue)

export default CartContext
