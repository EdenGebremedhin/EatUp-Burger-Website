import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logoWhite} alt="" />
                <p>EatUp Burger – Serving fresh, delicious, and satisfying burgers along with our signature Chip Butty. From classic beef to fasting-friendly options, we’ve got something for everyone. 
                    <span className='tagline'> Crave it, grab it, love it!</span></p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
 
            <div className="footer-content-center">
                <h2>EATUP BURGER</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+251 95 340 6633</li>
                    <li>+251 95 340 7686</li>
                    <li>eatupburger@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 © EatUp Burger - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer