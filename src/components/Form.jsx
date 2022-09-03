import React from "react";
import Input from "./Input";

const Form = ({ user, errors, handleUserChange, handleSubmit }) => {
  return (
    <form>
      <div>
        <Input
          user={user}
          errors={errors}
          name="cardName"
          label={"CARDHOLDER NAME"}
          placeholder={"e.g. Jane Appleseed"}
          maxLength={28}
          changeHandler={handleUserChange}
        />
        {errors.cardName && <p className="error-message">Cannot be blank</p>}
      </div>
      <div>
        <Input
          user={user}
          errors={errors}
          changeHandler={handleUserChange}
          name="number"
          label={"CARD NUMBER"}
          placeholder={"e.g. 1234 5678 9123 0000"}
          maxLength={19}
        />
        {errors.cardNumber && (
          <p className="error-message">Wrong format, try again</p>
        )}
      </div>
      <div className="other-card-details">
        <div className="expiry-date">
          <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
          <div>
            <Input
              user={user}
              errors={errors}
              changeHandler={handleUserChange}
              name="month"
              placeholder={"MM"}
              maxLength={2}
              max={12}
            />
            <Input
              user={user}
              errors={errors}
              changeHandler={handleUserChange}
              name="year"
              placeholder={"YY"}
              maxLength={4}
            />
          </div>
          {(errors.month || errors.year) && (
            <p className="error-message">Check date</p>
          )}
        </div>
        <div className="cvc">
          <Input
            user={user}
            errors={errors}
            changeHandler={handleUserChange}
            name="cvc"
            label={"CVC"}
            placeholder={"e.g. 123"}
            maxLength={3}
          />
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
