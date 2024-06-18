import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  // const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
             <input type="text" placeholder='First name' />
             <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Address' />
          <div className='multi-fields'>
             <input type="text" placeholder='City' />
             <input type="text" placeholder='State' />
          </div>
          <div className='multi-fields'>
             <input type="text" placeholder='Zip Code' />
             <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' /> 
        </div>
        <div className='place-order-right'>
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
              <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
                
            </div>
            
          </div>
        </div>
    </form>
  )
}

export default PlaceOrder