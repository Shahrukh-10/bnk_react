import React from "react";
import "./navbar.css";
import bank from "../../assets/bank.png";
const Navbar = () => {
  return (
    <nav>
      <div className="mainrow">
        <img src={bank} className="bankImg" alt="dfdf" />
        <div className="bankName">Mybank</div>
        <div className="navrow">
          <div className="navelement">Home</div>
          <div className="navelement">About</div>
        </div>
        <div className="btn">
          <button className="login btns">Login</button>
          <button className="signup btns">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
