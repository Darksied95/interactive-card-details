import React, { useState } from "react";
import logo from "./assets/card-logo.svg";
import done from "./assets/icon-complete.svg";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleUserChange = ({ target }) => {
    let newUser = { ...user };
    newUser[target.name] = target.value;
    setUser(newUser);
  };
  console.log(user);
  return (
    <div className="body">
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
            <input
              id="name"
              placeholder="e.g. Jane Appleseed"
              name="cardName"
              value={user.name}
              onChange={handleUserChange}
            />
          </div>
          <div>
            <label htmlFor="number">CARD NUMBER</label>
            <input
              id="number"
              placeholder="e.g. 1234 5678 9123 0000"
              name="cardNumber"
              value={user.number}
              onChange={handleUserChange}
            />
          </div>
          <div className="other-card-details">
            <div className="expiry-date">
              <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
              <div>
                <input
                  id="expiry-date"
                  placeholder="MM"
                  max="12"
                  maxLength="2"
                  name="month"
                  value={user.month}
                  onChange={handleUserChange}
                />
                <input
                  placeholder="YY"
                  name="year"
                  maxLength="4"
                  value={user.year}
                  onChange={handleUserChange}
                />
              </div>
            </div>
            <div className="cvc">
              <label htmlFor="cvc">CVC</label>
              <input
                id="cvc"
                placeholder="e.g. 123"
                name="cvc"
                value={user.cvc}
                onChange={handleUserChange}
              />
            </div>
          </div>
          <button>Confirm</button>
        </form>
        <div className="done">
          <img src={done} alt="done-logo" />
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button>Continue</button>
        </div>
      </section>
    </div>
  );
};

export default App;
