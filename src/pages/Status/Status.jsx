import React,{useContext} from 'react'
import { Storecontext } from '../../context/Store';
import "./Status.css";

const Status = () => {

  const{url,cartitem,food_list}=useContext(Storecontext);



  return (
    <div className="statusitem">
      <div className="statusitem-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Status</p>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartitem[item.id] > 0) {
          return (
            <div key={index}>
              <div className="statusitem-title statusitem-item" key={index}>
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>{cartitem[item.id]}</p>
                <p>${item.price * cartitem[item.id]}</p>
                <p> Food is processing </p>
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Status;