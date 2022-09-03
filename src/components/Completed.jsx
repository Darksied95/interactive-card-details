import React from "react";

const Completed = ({ done, restart }) => {
  return (
    <div className="done">
      <img src={done} alt="done-logo" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button onClick={restart}>Continue</button>
    </div>
  );
};

export default Completed;
