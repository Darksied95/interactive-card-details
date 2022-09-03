import React from "react";
import Completed from "./Completed";
import Form from "./Form";

const SecondSection = ({
  notSubmitted,
  user,
  handleUserChange,
  errors,
  handleSubmit,
  done,
  restart,
}) => {
  return (
    <section className="second-section">
      {notSubmitted ? (
        <Form
          user={user}
          handleUserChange={handleUserChange}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Completed done={done} restart={restart} />
      )}
    </section>
  );
};

export default SecondSection;
