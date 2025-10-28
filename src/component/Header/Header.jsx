import React from 'react'
import "./Header.css";
import { assets } from '../../assets/frontend_assets/assets'; 

const Header = () => {
  return (
      <div className="header" style={{background: `url(${assets.head})` ,
backgroundSize:'contain',
backgroundRepeat: `no-repeat`}}  >
        <div className="header-content">
          <h3>Just satisfy your appetite with Appetite.</h3>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingridents and culinary expertise.Our
            mission is to satisfy your cravings and elevate your dining
            experience.
          </p>
          <button>View Menu</button>
        </div>
      </div>
  );
}

export default Header
