import { Storecontext } from "./Store";
import {  useEffect, useState } from "react";
import axios from 'axios'
 const Storecontextprovider=(props)=>{

const [cartitem,setcartitem]=useState({});

const [food_list, setfood_list]=useState([]);

const url = "https://appetite-back.onrender.com";
const [token,settoken]=useState("");
const fetchlist= async()=>{
    const response=await axios.get(url+"/api/food/list");
setfood_list(response.data.list);
}

const loadcart=async (token)=>{
    console.log(response.data.cartdata, "djbfy");
const response=await axios.post(url+"/api/cart/get",{},{headers:{token:token}});

setcartitem(response.data.cartdata);
}


useEffect( ()=>{
  
const load= async()=>{
    await fetchlist();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
      await loadcart(localStorage.getItem("token"));}
}
load();
},[]);
const addtocart=async (itemid)=>{
if(!cartitem[itemid])
{
    setcartitem((prev)=>({...prev,[ itemid]:1}))
}
else
{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
}
await axios.post(url+'/api/cart/add',{itemid:itemid},{headers:{token:token}});
}    

const removefromcart=async (itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}));
    await axios.post(url+'/api/cart/remove',{itemid:itemid},{headers:{token:token}});
}


const gettotalamt=()=>{
    let totalamt=0;
    for(const item in cartitem)
    {
      
    if(cartitem[item]>0)
        {let iteminfo=food_list.find((product)=>product.id==item);
        totalamt+=(iteminfo.price)*cartitem[iteminfo.id];}
    }
return totalamt;
}

const contextvalue={
food_list,
cartitem,
setcartitem,
addtocart,
removefromcart,
gettotalamt,
url,
token,
settoken
    }
    
    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider;