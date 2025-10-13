import React from 'react'
import './Appdown.css';
import { assets } from '../../assets/frontend_assets/assets';
const Appdown = () => {
  return (
    <div className="appdown" id='appdown'>
      <p>
        Try our mobile application <br />
        <span style={{ color: "tomato" }}>Appetite </span> on
      </p>
      <div className="appdown-plat">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default Appdown