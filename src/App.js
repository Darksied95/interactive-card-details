import React, { useState } from "react";
import Joi from "joi";
import done from "./assets/icon-complete.svg";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import "./App.css";

const App = () => {
  let initialUserDetails = {
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  };
  const [user, setUser] = useState(initialUserDetails);
  const [errors, setErrors] = useState({});
  const [notSubmitted, setNotSubmitted] = useState(true);

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
  const validate = () => {
    let { error } = schema.validate(user, { abortEarly: false });
    if (!error) return null;
    let errorsObject = {};
    for (let errors of error.details) {
      errorsObject[errors.path] = errors.message;
    }
    setErrors(errorsObject);
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
    setErrors({});
    let error = validate();
    if (!error) {
      setNotSubmitted(false);
    }
  };
  const restart = () => {
    setNotSubmitted(true);
    setErrors({});
    setUser(initialUserDetails);
  };

  return (
    <div className="body">
      <FirstSection user={user} />
      <SecondSection
        notSubmitted={notSubmitted}
        done={done}
        user={user}
        handleUserChange={handleUserChange}
        handleSubmit={handleSubmit}
        restart={restart}
        errors={errors}
      />
    </div>
  );
};

export default App;
