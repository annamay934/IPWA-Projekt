import React from "react";

const OutputRegistration = ({ registrationData }) => {
  return (
    <div>
      <h2>Registrierungsdaten</h2>
      <p>
        Kleiderart: {registrationData.clothes1 || registrationData.clothes1}
      </p>
      <p>
        Krisengebiet: {registrationData.location1 || registrationData.location2}
      </p>
    </div>
  );
};

export default OutputRegistration;
