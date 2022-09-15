import React from "react";
import Completed from "./Completed";
import Form from "./Form";
const SecondSection = ({ notSubmitted, done, restart }) => {
  return (
    <section className="second-section">
      {notSubmitted ? <Form /> : <Completed done={done} restart={restart} />}
    </section>
  );
};

export default SecondSection;
