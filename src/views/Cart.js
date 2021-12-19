import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Commerce from '@chec/commerce.js'
import { Grid } from 'semantic-ui-react';

//Component Imports
import Nav from '../components/cart/Nav'
import LeftPanel from '../components/cart/LeftPanel'
import ProductContainer from '.components/cart/ProductContainer'
import CheckoutContainer from '../components/cart/CheckoutContainer'
import CheckoutComplete from '../components/cart/CheckoutComplete'
// import PrivateRoute from './utils/PrivateRoute'

export const CartItemsContext = React.createContext()

function Cart() {

   

    const [cart, setCart] = useState()
    const [checkout, setCheckout] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [receipt, setReceipt] = useState()

    useEffect(() => {
        commerce.cart.retrieve()
            .then(res => {
                // console.log(res, 'response from app useEffect')
                setCart(res)
            })
    },[receipt])

    const cartHelperFunctions = {

        deleteItem: (lineItemId) => {
            commerce.cart.remove(lineItemId)
                .then(res => {
                    setCart(res.cart)
                    localStorage.removeItem('cart-id')
                })
        },
        addQaunity: (lineItemId, newQuanity) => {
            commerce.cart.update(lineItemId, {quantity: newQuanity})
                .then(res => {
                    setCart(res.cart)
                    
                })
        },
        subtractQuanity: (lineItemId, newQuanity) => {

            if (newQuanity === 0) {
                cartHelperFunctions.deleteItem(lineItemId)
            } else {
                commerce.cart.update(lineItemId, {quantity: newQuanity})
                    .then(res => {
                        setCart(res.cart)
                    })
            }

        }
    }

    const addToCart = (productId, variantInfo) => {

        if(variantInfo) {
            commerce.cart.add(productId, 1, variantInfo)
                .then(res => {
                    // console.log(res, 'res from adding to CART!!')
                    setCart(res.cart)
                })
        } else {
            window.alert('Please Select a Shirt Size')
        }
    }

    const emptyCart = () => {
        commerce.cart.empty()
            .then(res => {
                // console.log(res, 'res from empty cart')
                setCart(null)
                localStorage.removeItem('cart-id')
            })
    }

    return (
        <div className="Cart">

            <CartItemsContext.Provider value={cartHelperFunctions}>
                <Nav 
                    cart={cart} 
                    emptyCart={emptyCart} 
                    checkout={checkout} 
                    setCheckout={setCheckout}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </CartItemsContext.Provider>

            <Grid centered stackable padded relaxed>
                {/* <LeftPanel /> */}
                <Grid.Column className='left-column' width={5}>
                    <Route exact path="/" component={LeftPanel} />
                </Grid.Column>

                {/* <Right Panel /> */}
                <Grid.Column width={9}>
                    <Route exact path="/" render={props => {
                        return (
                            <ProductContainer 
                                {...props}
                                addToCart={addToCart}
                                setCheckout={setCheckout}
                            />
                        )
                    }}/>
                </Grid.Column>
            </Grid>

            {/* Route to Checkout */}
            {/* <PrivateRoute 
                component={CheckoutContainer}
                path={`/checkout/:id`} 
                setCheckout={setCheckout}
                setModalOpen={setModalOpen}
                setReceipt={setReceipt}
            /> */}
            {/* <PrivateRoute 
                component={CheckoutComplete}
                path={`/order-complete/:checkoutToken/:orderId`}
                setCheckout={setCheckout} 
            /> */}
            <Route path="/order-complete/:checkoutToken/:orderId" render={props => {
                return (
                    <CheckoutComplete 
                        {...props}
                        setCheckout={setCheckout}
                    />
                )
                }}
            />
        </div>
  );
}

export default Cart;