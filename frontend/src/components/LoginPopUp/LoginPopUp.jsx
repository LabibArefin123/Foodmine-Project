import './LoginPopUp.css'
import { useState } from "react";
import { assets } from '../../assets/assets';
// import { setShowLogin} from "../../components/Navbar/Navbar";
import PropTypes from "prop-types";
const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  LoginPopUp.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <> </>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp