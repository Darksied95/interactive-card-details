import React from "react";

const Input = ({
  user,
  errors,
  name,
  label,
  placeholder,
  maxLength,
  changeHandler,
  max,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        placeholder={placeholder}
        name={name}
        max={max}
        maxLength={maxLength}
        value={user[name]}
        onChange={changeHandler}
        className={errors[name] && "error"}
      />
    </div>
  );
};

export default Input;
