import React from "react";

import RegistrationForm from "../NewRegistration/RegistrationForm";
import "./NewRegistration.css";

const NewRegistration = (props) => {
  const saveRegistrationDataHandler = (enteredRegistrationData) => {
    const registrationData = {
      ...enteredRegistrationData,
      id: Math.random().toString(),
    };
    props.onAddRegistration(registrationData);
  };

  return (
    <div className="">
      <RegistrationForm onSaveRegistrationData={saveRegistrationDataHandler} />
    </div>
  );
};

export default NewRegistration;
