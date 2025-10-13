import React, { useContext } from 'react'
import './Fooditem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Storecontext } from '../../context/Store';
const Fooditem = ({ id, name, price, description, image }) => {

const {cartitem,addtocart,removefromcart}=useContext(Storecontext);

  return (
    <div className="fooditem">
      <div className="fooditem-img-container">
        <img className="fooditem-img" src={image} alt="" />
     {
      !cartitem[id]? <img className='add' onClick={()=>{addtocart(id)}} src={assets.add_icon_white} alt="" />:
       <div className='fooditem-counter'>
        <img src={assets.remove_icon_red} onClick={()=>{removefromcart(id)}}  alt="" />
         <p>{cartitem[id]}</p>
         <img src={assets.add_icon_green} onClick={()=>{addtocart(id)}} alt="" />
         </div>
}
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fooditem-description">{description}</p>
        <p className="fooditem-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem