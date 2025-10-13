import React from 'react'
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
        {<img className='log' src={assets.logo} alt="" />}
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem animi tempora, iusto temporibus similique facilis molestiae voluptatum veniam. Inventore illo quo fugit eaque.</p>
    <div className="footer-social-icon">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
    </div>
    <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
<h2>Get in touch</h2>
<ul>
    <li>+313-46747888</li>
    <li>appetite@contact.com</li>
</ul>

    </div>
</div>
<hr />
<p className="footer-copy">
    Copyright 2025 @ Appetite.com - All right reserved.
</p>
    </div>
  )
}

export default Footer