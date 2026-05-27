import React,{useContext} from 'react'
import { Storecontext } from '../../context/Store';
import "./Status.css";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

const Status = () => {

  const{url,token}=useContext(Storecontext);
let [items,setitems]=useState({});
let [status, setstatus] = useState();
 useEffect(()=>{

  (async ()=>{
    let ordereditem = await axios.get(url + "/api/food/order", {
      headers: {
        token: token,
      },
    });
    console.log(ordereditem.data);
    setitems(ordereditem.data.items.items);
    setstatus(ordereditem.data.items.status)
  })() 
},[token,url])

let keys=[];
if(items)
{keys=Object.keys(items);
}
return (
  <div className="statusitem">
    <div className="statusitem-title">
      <p className="sp">Items</p>
      <p className="sp">Quantity</p>
      <p className="sp">Total</p>
      <p className="sp">Status</p>
    </div>
    <br />
    <hr />
    {status&&keys.map((item, index) => {
        return (
          <div key={index}>
            <div className="statusitem-title statusitem-item" key={index}>
              <p className="sp">{item}</p>
              <p className="sp">{items[item].quantity}</p>
              <p className="sp">₹{items[item].amount}</p>
              <p className="sp"> {status} </p>
            </div>
            <hr />
          </div>
        );
      
    })}
  </div>
);
}

export default Status;