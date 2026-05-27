import { Storecontext } from "./Store";
import { useEffect, useState } from "react";
import axios from "axios";
const Storecontextprovider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const [customerinfo, setcustomerinfo] = useState({});
  const [food_list, setfood_list] = useState([]);

  const url = import.meta.env.VITE_URL;
  const [token, settoken] = useState("");
  const fetchlist = async () => {
    const response = await axios.get(url + "/api/food/list");
    setfood_list(response.data.list);
  };

  const loadcart = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token: token } },
    );
    setcartitem(response.data.cartdata);
  };

  useEffect(() => {
    const load = async () => {
      await fetchlist();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
        await loadcart(localStorage.getItem("token"));
        let  newurl =url+ "/api/user/getemail";
          const response = await axios.get(newurl, {
            headers: { token: localStorage.getItem("token") },
          });
          setcustomerinfo(response.data.email[0].email);
    
  }
}
    load();
  }, [token]);
  const addtocart = async (itemid, price,name) => {
    if (!cartitem[itemid]) {
      setcartitem((prev) => ({
        ...prev,
        [itemid]: { quantity: 1, price: price,name:name },
      }));
    } else {
      setcartitem((prev) => ({
        ...prev,
        [itemid]: { ...prev[itemid], quantity: prev[itemid].quantity + 1 },
      }));
    }
    await axios.post(
      url + "/api/cart/add",
      { itemid: itemid, price: price ,name:name},
      { headers: { token: token } },
    );
  };

  const removefromcart = async (itemid) => {
    setcartitem((prev) => {
      const newCart = { ...prev };
      if (newCart[itemid] && newCart[itemid].quantity > 1) {
        newCart[itemid] = {
          ...newCart[itemid],
          quantity: newCart[itemid].quantity - 1,
        };
      } else {
        delete newCart[itemid]; 
      }
      return newCart;
    });
    await axios.post(
      url + "/api/cart/remove",
      { itemid: itemid },
      { headers: { token: token } },
    );
  };

  const gettotalamt = () => {
    let totalamt = 0;
    for (const item in cartitem) {
      if (food_list&& cartitem[item].quantity > 0) {
        let iteminfo = food_list.find((product) => product.id == item);
        totalamt += iteminfo.price * cartitem[iteminfo.id].quantity;
      }
    }
    return totalamt;
  };

  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    gettotalamt,
    url,
    token,
    settoken,
    customerinfo,
    setcustomerinfo,
  };

  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default Storecontextprovider;
