import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../context/Store';


const PlaceOrder=()=> {

const {gettotalamt}=useContext(Storecontext);

let total=gettotalamt();

  return (
    <div >
      <form className="order">
        <div className="order-left">
          <p className="title">Delivery Information</p>
          <div className="multifield">
            <input type="text" placeholder="First Name" />

            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />

          <div className="multifield">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multifield">
            <input type="text" placeholder="Pin Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>

        <div className="order-right">
          <div className="carttotal">
          <h3    >Cart Total</h3>
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
          <button  >Procced to checkout</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;