import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets'
import { Storecontext } from '../../context/Store';
const Navbar = ({setshowlogin}) => {

const [menu,setmenu]= useState("home");
const navigate=useNavigate();
const {gettotalamt ,token ,settoken,setcartitem}=useContext(Storecontext);
const logout=()=>{
localStorage.removeItem("token");
settoken("");
setcartitem({});
navigate("/");
}

  return (
    <div className="navbar">
      <Link to='/' >
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setmenu("home");
          }}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setmenu("menu");
          }}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#appdown"
          onClick={() => {
            setmenu("mobile");
          }}
          className={menu == "mobile" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("contact");
          }}
          className={menu == "contact" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={gettotalamt()>0?"dot":""}></div>
        </div>
        {!token?<button onClick={() => setshowlogin(true)}>Sign in</button>:
        <div className='navprofile'>
          <img src={assets.profile_icon} alt="" />
        <ul className="navprofile-dropdown">
          <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={logout} > <img src={assets.logout_icon} alt="" /> <p>Logout</p> </li>
        </ul>
        </div>
        }
      </div>
    </div>
  );
}

export default Navbar