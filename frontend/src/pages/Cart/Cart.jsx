// import {useState} from 'react';
// import './Cart.css'

// const Cart = () => {
//   // const {cartItems, food_list, removeFromCart} = useState([]);
//   const {food_list, cartItems} = useState([]);
//   return (
//     <div className='cart'>
//       <div className='cart-items'>
//         <div className='cart-items-title'>
//             <p>Items</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={item._id} className="cart-items-title cart-item-item">
//                 <p>{item.name}</p>
//               </div>
//             );
//           }
          
//         })}

//       </div>
      
//     </div>
//   )
// }

// export default Cart 
import { useState, useEffect } from 'react';
import './Cart.css';
import { useNavigate } from'react-router-dom';

const Cart = () => {
  // const {cartItems, food_list, removeFromCart} = useState([]);
  const [food_list, setFoodList] = useState([]); // Initialize food_list as an empty array
  const [cartItems] = useState({}); // Initialize cartItems as an empty object
  const navigate = useNavigate();
  // Fetch food_list data from an API or other data source
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchedFoodList = [
      { _id: 1, name: 'Pizza' },
      { _id: 2, name: 'Burger' },
      { _id: 3, name: 'Salad' },
    ];
    setFoodList(fetchedFoodList);
  }, []);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list &&
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={`${item._id}-${cartItems[item._id]}`}>
                  <div className="cart-items-title cart-item-item">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    {/* <p onClick={( )=>removeFromCart()} className='cross'>x</p> */}
                    <p className='cross'>x</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>Cart Total</h2>
            <div>
              <div className='card-total-details'> 
                  <p>Subtotal</p>
                  <p>{0}</p>
              </div>
              <hr />
              <div className='card-total-details'> 
                  <p>Delivery Fee</p>
                  <p>{2}</p>
              </div>
              <hr />
              <div className='card-total-details'> 
                  <b>Total</b>
                  <b>{0}</b>
              </div>
              <br />
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                
            </div>
            <div className='cart-promocode' >
              <div>
                <p>If you have promo code, Enter it here</p>
                <div className='cart-promocode-input'>
                  <input type="text" placeholder="Enter promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
