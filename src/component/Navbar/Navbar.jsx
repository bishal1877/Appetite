import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets'
import { Storecontext } from '../../context/Store';
const Navbar = ({setshowlogin}) => {

const [menu,setmenu]= useState("home");

const {gettotalamt}=useContext(Storecontext);


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
        <button onClick={() => setshowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar