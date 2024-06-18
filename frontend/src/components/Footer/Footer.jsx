import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>
                    Tomato , The Culinary Delight offers a symphony of flavors with its exquisite dishes. Renowned for its impeccable service and elegant ambiance, it's the perfect destination for food enthusiasts seeking a memorable dining experience. 
                    </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
                </div>
                <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880 1678074363</li>
                    <li>support@totalofftec.com</li>
                </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'> Copyright 2024 Totalofftec.com - All Right Reserved</p>
        </div>
    )
}

export default Footer