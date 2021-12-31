import React, { createContext, useState } from 'react'
import getSessionStorage from "../customize/getSessionStorage"


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // State
    const [cart, setCart] = useState(
        // getSessionStorage('listCart', false)
        []
    )


    //ADD CART TO DB
    // const [userID, setUserID] = useState(
    //     getSessionStorage('userID', false)
    //   );
    //   console.log('userID first: ', userID)
    //   const {data: user, loading, isError} = useFetch(`http://localhost:54610/api/User/GetbyID/${userID}`);

    // console.log("accountID cart first: ", user.userMail)
    // //FIND CART ID
    // let cartID = 0
    // const {data: listCart, loading: cartLoading, isError: cartIsError} = useFetch("http://localhost:54610/api/Cart/GetAll");
    // for(let item = 0; item < listCart.length; item++){
    //     if(listCart[item].accountID == user.userMail){
    //         cartID = item + 1
    //     }
    // }
    const handleBuyClick = (newItem) => {
        const newArr = [...cart];
        const index = newArr.findIndex((item) => item.productID == newItem.productID);
        if (index !== -1) {
            newArr[index] = {
                ...newArr[index],
                quantity: Number(newArr[index].quantity) + Number(newItem.quantity)
            }
            setCart([
                ...newArr,
            ]);
        } else
            setCart([
                ...cart,
                newItem
            ]);
        //Test post cart detail
        // if(cartID != 0){
        //     cartID.toString()
        //     axios.post("https://localhost:54610/api/CartDetail/Post", {
        //         "CartID": cartID,
        //         "ProductID": newItem.ProductID,
        //         "Money": newItem.price
        //       });    
        // }


    }

    const deleteItemCart = (id) => {
        let currentCart = cart;
        currentCart = currentCart.filter(item => item.productID !== id)
        setCart(currentCart)
        sessionStorage.setItem('listCart', JSON.stringify(currentCart));
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