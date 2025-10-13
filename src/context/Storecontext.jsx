import { Storecontext } from "./Store";
import { food_list } from "../assets/frontend_assets/assets";
import {  useState } from "react";

 const Storecontextprovider=(props)=>{

const [cartitem,setcartitem]=useState({});
const addtocart=(itemid)=>{
if(!cartitem[itemid])
{
    setcartitem((prev)=>({...prev,[ itemid]:1}))
}
else
{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
}
}    

const removefromcart=(itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}));
}


const gettotalamt=()=>{
    let totalamt=0;
    for(const item in cartitem)
    {
    if(cartitem[item]>0)
        {let iteminfo=food_list.find((product)=>product._id===item);
        totalamt+=iteminfo.price*cartitem[iteminfo._id];}
    }
return totalamt;
}

const contextvalue={
food_list,
cartitem,
setcartitem,
addtocart,
removefromcart,
gettotalamt
    }
    
    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider;