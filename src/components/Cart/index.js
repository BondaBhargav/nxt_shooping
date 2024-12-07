import Header from '../Header'
import CartListView from '../CartListView'

import {useSelector } from "react-redux"
import EmptyCartView from '../EmptyCartView'

import './index.css'
import { useState } from 'react'
import CartSummary from '../CartSummary'
import { clearCart } from '../StoreManagement/store'

const Cart = () =>{
    const data=useSelector (state=>state.carListData.cartList)

    console.log("00000000000    ",data)
      
      const showEmptyView = data.length === 0
      console.log(showEmptyView)
      // TODO: Update the functionality to remove all the items in the cart
      let totalAmout = 0
      data.forEach(each => {
        totalAmout += each.price * each.quantity
        console.log(totalAmout)
      })
      const onclickClearCart = () => {
      clearCart()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button className="btn-rem" onClick={onclickClearCart}>
                  Remove all
                </button>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    
    
    
    
    
    }

     

export default Cart
