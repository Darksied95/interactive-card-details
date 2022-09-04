import React from "react";
import Input from "./Input";

const Form = ({ user, errors, handleUserChange, handleSubmit }) => {
  function renderInput(
    name,
    label,
    placeholder,
    maxLength,
    max,
    userInfo = user,
    errorsInfo = errors,
    changeHandler = handleUserChange
  ) {
    return (
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        maxLength={maxLength}
        max={max}
        changeHandler={changeHandler}
        user={userInfo}
        errors={errorsInfo}
      />
    );
  }
  return (
    <form>
      <div>
        {renderInput("cardName", "CARDHOLDER NAME", "e.g. Jane Appleseed", 28)}
        {errors.cardName && <p className="error-message">Cannot be blank</p>}
      </div>

      <div>
        {renderInput(
          "cardNumber",
          "CARD NUMBER",
          "e.g. 1234 5678 9123 0000",
          19
        )}
        {errors.cardNumber && (
          <p className="error-message">Wrong format, try again</p>
        )}
      </div>

      <div className="other-card-details">
        <div className="expiry-date">
          <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
          <div>
            {renderInput("month", undefined, "MM", 2, 12)}
            {renderInput("year", null, "YY", 4)}
          </div>
          {(errors.month || errors.year) && (
            <p className="error-message">Check date</p>
          )}
        </div>
        <div className="cvc">
          {renderInput("cvc", "CVC", "e.g. 123", 3)}
          {errors.cvc && <p className="error-message">Check cvc</p>}
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
