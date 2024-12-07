import CartItem from '../CartItem'

import { useSelector } from 'react-redux'
import './index.css'

const CartListView = () => {
  
const cartList=useSelector(state=>state.carListData.cartList)
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    
 
    }

export default CartListView
