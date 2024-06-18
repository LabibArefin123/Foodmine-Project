import { assets } from '../../assets/assets'
import { useState } from'react'
import './FoodItem.css'

const FoodItem = ({ id, name, price, image, description }) => {
  const [itemCount, setItemCount] = useState(0);
  
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-image-image" src={image} alt="" />
        {!itemCount
        ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
        : <div className='food-item-counter'>
          <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
          <p>{itemCount}</p>
          <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
        </div>
        }

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price"> {price} Taka </p>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

FoodItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FoodItem

// import { assets } from '../../assets/assets'
// import { useContext, useState } from'react'
// import './FoodItem.css'

// const FoodItem = ({ id, name, price, image, description }) => {
//   const [itemCount, setItemCount] = useState(0);
//   const [cartItems, addToCart, removeFromCart] = useContext(StoreContext);
//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-image-image" src={image} alt="" />
//         {!cartItems[id]
//         ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//         : <div className='food-item-counter'>
//           <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//           <p>{itemCount}</p>
//           <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
//         </div>
//         }

//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-description">{description}</p>
//         <p className="food-item-price"> {price} Taka </p>
//       </div>
//     </div>
//   );
// };

// import PropTypes from "prop-types";
// import { StoreContext } from '../../context/StoreContext';

// FoodItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default FoodItem