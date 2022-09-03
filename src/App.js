import React, { useState } from "react";
import Joi from "joi";
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
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    cardName: Joi.string().min(3).max(28).required(),
    cardNumber: Joi.string()
      .pattern(/(\d{4}\s?){4}/)
      .required()
      .min(19)
      .max(19),
    month: Joi.number().min(1).max(12).required(),
    year: Joi.number().min(2022).max(9999).required(),
    cvc: Joi.number().min(100).max(999).required(),
  });
  const validated = () => {
    let errors = schema.validate(user, { abortEarly: false });
    setErrors(errors);
    return errors;
  };
  const handleUserChange = ({ target }) => {
    let newUser = { ...user };

    if (target.name === "cardNumber") {
      newUser["cardNumber"] = (target.value.match(/\w{1,4}/g) || []).join(" ");
    } else {
      newUser[target.name] = target.value;
    }
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="body">
      <section className="first-section">
        <div className="back-card">
          <p>{user.cvc || "000"}</p>
        </div>
        <div className="front-card">
          <img src={logo} alt="logo" className="logo" />
          <p className="card-number">
            {user.cardNumber || "0000 0000 0000 0000"}
          </p>
          <div className="details">
            <p>{user.cardName.toUpperCase() || "JANE APPLESEED"}</p>
            <p>
              {user.month || "00"}/{user.year || "00"}
            </p>
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
              required={true}
              maxLength={28}
              value={user.cardName}
              onChange={handleUserChange}
            />
            <p>Error</p>
          </div>
          <div>
            <label htmlFor="number">CARD NUMBER</label>
            <input
              id="number"
              placeholder="e.g. 1234 5678 9123 0000"
              name="cardNumber"
              maxLength="19"
              required={true}
              value={user.cardNumber}
              onChange={handleUserChange}
            />
            {!!Object.keys(errors).length && <p>Wrong format, numbers only</p>}
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
                  required
                  value={user.month}
                  onChange={handleUserChange}
                />
                <input
                  placeholder="YY"
                  name="year"
                  maxLength="4"
                  required
                  value={user.year}
                  onChange={handleUserChange}
                />
              </div>
              <p>Error</p>
            </div>
            <div className="cvc">
              <label htmlFor="cvc">CVC</label>
              <input
                id="cvc"
                placeholder="e.g. 123"
                name="cvc"
                maxLength={3}
                required
                value={user.cvc}
                onChange={handleUserChange}
              />
              <p>Error</p>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Confirm
          </button>
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
