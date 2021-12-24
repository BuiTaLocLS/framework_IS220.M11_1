import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // State
    const [cart, setCart] = useState([
        {
            productID: 129,
            productName: "Giày Pan Sonic S 2021 IC",
            price: 540000.0,
            img_URL: "https://drive.google.com/uc?export=view&id=1ZOfFSKXYxwLYY-3R3YobFDs9ZEAEh5Ia",
            quantity: 2,
        },
    ])


    const handleBuyClick = (newItem) => {
        setCart([
            ...cart,
            newItem
        ])
    }

    const deleteItemCart = (id) => {
        let currentCart = cart;
        currentCart = currentCart.filter(item => item.productID !== id)
        setCart(currentCart)
    }

    // Context data
    const cartContextData = {
        cart,
        handleBuyClick,
        deleteItemCart
    }

    // Return provider
    return (
        <CartContext.Provider value={cartContextData}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider