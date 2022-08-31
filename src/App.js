import React from "react";
import logo from "./assets/card-logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <section className="first-section">
        <div className="back-card">
          <p>000</p>
        </div>
        <div className="front-card">
          <img src={logo} alt="logo" className="logo" />
          <p className="card-number">0000 0000 0000 0000</p>
          <div className="details">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </section>
      <section className="second-section">
        <form>
          <div>
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input id="name" placeholder="e.g. Jane Appleseed" />
          </div>
          <div>
            <label htmlFor="number">CARD NUMBER</label>
            <input id="number" placeholder="e.g. 1234 5678 9123 0000" />
          </div>
          <div className="other-card-details">
            <div className="expiry-date">
              <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
              <div>
                <input id="expiry-date" placeholder="MM" />
                <input placeholder="YY" />
              </div>
            </div>
            <div className="cvc">
              <label htmlFor="cvc">CVC</label>
              <input id="cvc" placeholder="e.g. 123" />
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </section>
    </div>
  );
};

export default App;
