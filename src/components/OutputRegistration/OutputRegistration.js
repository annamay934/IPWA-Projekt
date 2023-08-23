import React from "react";

const OutputRegistration = (props) => {
  console.log(props);
  if (!props.displayRegistrationData) {
    return (
      <div>
        <h2>Registrierungsdaten</h2>
        <p>Vorname: {props.displayDummyData.firstName}</p>
        <p>Nachname: {props.displayDummyData.lastName}</p>
        <p>Straße: {props.displayDummyData.street}</p>
        <p>Postleitzahl: {props.displayDummyData.zip}</p>
        <p>Wohnort: {props.displayDummyData.city}</p>
        <p>Kleiderart: {props.displayDummyData.clothes1}</p>
        <p>Krisengebiet: {props.displayDummyData.location1}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Registrierungsdaten</h2>
      <p>Vorname: {props.displayRegistrationData.firstName}</p>
      <p>Nachname: {props.displayRegistrationData.lastName}</p>
      <p>Straße: {props.displayRegistrationData.street}</p>
      <p>Postleitzahl: {props.displayRegistrationData.zip}</p>
      <p>Wohnort: {props.displayRegistrationData.city}</p>

      <p>Kleiderart: {props.displayRegistrationData.clothes1}</p>
      <p>Krisengebiet: {props.displayRegistrationData.location1}</p>
      <p>Kleiderart: {props.displayRegistrationData.clothes2}</p>
      <p>Krisengebiet: {props.displayRegistrationData.location2}</p>
    </div>
  );
};

export default OutputRegistration;
