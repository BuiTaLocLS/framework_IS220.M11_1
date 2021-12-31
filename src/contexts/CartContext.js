import React, { createContext, useState } from 'react'
import axios from "axios";
import getSessionStorage from "../customize/getSessionStorage"
import useFetch from '../customize/fetch';
import AuthService from '../customize/auth.service';
export const CartContext = createContext();

// JSON.parse(localStorage.getItem("user")).user.accountID;

const CartContextProvider = ({ children }) => {
    const accountID = AuthService.getCurrentUser();
    const { data: arrCart } = useFetch(`http://localhost:54610/api/Cartdetail/GetbyAccountID/${accountID}`);

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
    const handleBuyClick = (productID, cartID, capacity, money, addDate) => {
        axios.post('http://localhost:54610/api/CartDetail/Post', {
            // "productID": newItem.productID,
            // "cartID": newItem.cartID,
            // "capacity": newItem.capacity,
            // "money": newItem.money,
            // "addDate": newItem.addDate
            "productID": productID,
            "cartID": cartID,
            "capacity": capacity,
            "money": money,
            "addDate": addDate
        });



        localStorage.setItem('listCart', JSON.stringify(arrCart));
        setCart(arrCart)

    }

    const setDefaultcart = (arr) => {
        console.log("arr", arr)
        setCart(arr)
        localStorage.setItem('listCart', JSON.stringify(arr));
    }

    const deleteItemCart = (id) => {
        let currentCart = cart;
        currentCart = currentCart.filter(item => item.productID !== id)
        setCart(currentCart)
        localStorage.setItem('listCart', JSON.stringify(currentCart));
    }

    // Context data
    const cartContextData = {
        cart,
        handleBuyClick,
        deleteItemCart,
        setDefaultcart
    }

    // Return provider
    return (
        <CartContext.Provider value={cartContextData}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider