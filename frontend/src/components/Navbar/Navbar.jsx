import './Navbar.css'
import {assets} from '../../assets/assets';
import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => handleMenuClick("home")}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => handleMenuClick("menu")}
        >
          menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => handleMenuClick("mobile-app")}
        >
          mobile-app
        </a>
        <Link to='/ourservice'>
        
        <a
          href="#app-download"
          className={menu === "ourservice" ? "active" : ""}
          onClick={() => handleMenuClick("ourservice")}
        >
          our service
        </a>
        </Link>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => handleMenuClick("contact-us")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};


Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;