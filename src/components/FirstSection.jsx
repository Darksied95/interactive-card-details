import React from "react";
import logo from "../assets/card-logo.svg";

const FirstSection = ({ user }) => {
  return (
    <section className="first-section">
      <div className="overflow">
        <div className="back-card">
          <p>{user.cvc || "000"}</p>
        </div>
      </div>
      <div className="front-card">
        <img src={logo} alt="logo" className="logo" />
        <p className="card-number">
          {user.cardNumber || "1234 5678 9123 0000"}
        </p>
        <div className="details">
          <p>{user.cardName.toUpperCase() || "JANE APPLESEED"}</p>
          <p>
            {user.month || "00"}/{user.year || "00"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
