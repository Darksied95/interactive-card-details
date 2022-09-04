import React from "react";

const Input = ({ user, errors, name, label, onChange, ...rest }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        value={user[name]}
        onChange={onChange}
        className={errors[name] && "error"}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
