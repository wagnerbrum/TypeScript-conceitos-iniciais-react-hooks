// import React, { useContext } from 'react'

// import CartContext from './CartContext'

// const AppContext: React.FC = () => {
//     const { products } = useContext(CartContext)

//     return <div>{products.map((product) => product.name)}</div>
// }

// export default AppContext

interface Product {
    id: number
    name: string
    price: number
}

interface Cart {
    products: string[]
    shipping_value?: number
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

import React, { useReducer } from 'react'

const AppContext: React.FC = () => {
    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto Novo'],
                    }
                default:
                    return state
            }
        },
        {
            products: [],
            shipping_value: 0,
        }
    )

    return <div></div>
}

export default AppContext
