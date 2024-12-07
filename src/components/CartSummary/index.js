// Write your code here
import './index.css'

import { useSelector } from 'react-redux'

const CartSummary = () => {
 

      const cartList=useSelector(state=>state.carListData.cartList)
      const showEmptyView = cartList.length === 0
      let totalAmout = 0
      cartList.forEach(each => {
        totalAmout += each.price * each.quantity
        console.log(totalAmout)})
      return (
        <div>
          <h1>
            <span> Order Total:</span> Rs{totalAmout}
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button>CheckOut</button>
        </div>
      )
    
  
  }

export default CartSummary
