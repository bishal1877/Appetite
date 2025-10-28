import React, { useContext } from 'react'
import './Cart.css';
import { Storecontext } from '../../context/Store';
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const{url,cartitem,food_list,removefromcart,gettotalamt}=useContext(Storecontext);

const navigate=useNavigate();
let total=gettotalamt();

  return (
    <div className="cart">
      <div className="cartitem">
        <div className="cartitem-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cartitem-title cartitem-item"  key={index} >
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartitem[item.id]}</p>
                  <p>$ {item.price * cartitem[item.id]}</p>
                  {/* <p onClick={()=>removefromcart(item._id)} className='cross' >x</p> */}
                  <p className="cross" onClick={() => removefromcart(item.id)}>
                    <img src={assets.remove_icon_red} alt="" />
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartbottom">
        <div className="carttotal">
          <h3>Cart Total</h3>
          <div>
            <div className="carttotal-detail">
              <p>Subtotal</p>
              <p>$ {total}</p>
            </div>
            <hr />
            <div className="carttotal-detail">
              <p>Delivery fee</p>
              <p>$ {total>0?2:0}</p>
            </div>
            <hr />
            <div className="carttotal-detail">
              <b>Total</b>
              <b>$ {total?total+2:0}</b>
            </div>
          </div>
          <button  onClick={()=>{navigate('/order')}}  >Procced to checkout</button>
        </div>
        <div className="cartpromocode">
          <div><p>
            If you have a promo code ,Enter it here
            </p>
            <div className="cartcode-input">
              <input type="text" placeholder='PromoCode' />
              <button>Submit</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart