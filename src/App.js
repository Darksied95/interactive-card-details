import React, { useState } from "react";
import Joi from "joi";
import done from "./assets/icon-complete.svg";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import "./App.css";

export const SecondSectionContext = React.createContext()
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
  const ruleSets = {
    cardName: Joi.string().max(28).required(),
    cardNumber: Joi.string()
      .pattern(/(\d{4}\s?){4}/)
      .required()
      .min(19)
      .max(19),
    month: Joi.number().min(1).max(12).required(),
    year: Joi.number().min(2022).max(9999).required(),
    cvc: Joi.number().min(100).max(999).required(),
  }


  const validateOnSubmit = () => {
    const schema = Joi.object(ruleSets);
    let { error } = schema.validate(user, { abortEarly: false });
    if (!error) return null;
    let errorsObject = {};
    for (let errors of error.details) {
      errorsObject[errors.path] = errors.message;
    }
    setErrors(errorsObject);
    return errors;
  };

  const validateOnBlur = ({ target }) => {
    const { name, value } = target
    const obj = { [name]: value }
    const schema = Joi.object({ [name]: ruleSets[name] })
    const { error } = schema.validate(obj)
    if (!error) {
      setErrors({})
      return null
    }

    const { path, message } = error.details[0]

    const newError = { [path]: message }
    setErrors(newError)

  }
  const handleUserChange = ({ target }) => {

    if (target.value.length === target.maxLength + 1) { return null }
    let newUser = { ...user };


    (target.name === "cardNumber")
      ?
      (newUser["cardNumber"] = (target.value.match(/\w{1,4}/g) || []).join(" "))
      :
      (newUser[target.name] = target.value)


    setUser(newUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let error = validateOnSubmit();
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
      <SecondSectionContext.Provider value={{ user, handleUserChange, handleSubmit, validateOnBlur, errors, }}>
        <SecondSection
          notSubmitted={notSubmitted}
          done={done}
          restart={restart}
        />
      </SecondSectionContext.Provider >
    </div>
  );
};

export default App;
