import React from "react";

const OutputRegistration = (props) => {
  console.log(props);

  const hasNonEmptyString = (obj) => {
    return Object.values(obj).some(
      (value) => typeof value === "string" && value.trim() !== ""
    );
  };

  if (
    props.displayRegistrationData &&
    hasNonEmptyString(props.displayRegistrationData)
  ) {
    const { clothes1, location1, clothes2, location2 } =
      props.displayRegistrationData;

    return (
      <div>
        <h2>Registrierungsdaten</h2>
        <p>Vorname: {props.displayRegistrationData.firstName}</p>
        <p>Nachname: {props.displayRegistrationData.lastName}</p>
        <p>Straße: {props.displayRegistrationData.street}</p>
        <p>Postleitzahl: {props.displayRegistrationData.zip}</p>
        <p>Wohnort: {props.displayRegistrationData.city}</p>
        {clothes1 && <p>Kleiderart: {clothes1}</p>}
        {clothes2 && <p>Kleiderart: {clothes2}</p>}
        {location1 && <p>Krisengebiet: {location1}</p>}
        {location2 && <p>Krisengebiet: {location2}</p>}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Registrierungsdaten</h2>
        {props.displayDummyData.map((dummyData, index) => (
          <div key={index}>
            <p>Vorname: {dummyData.firstName}</p>
            <p>Nachname: {dummyData.lastName}</p>
            <p>Straße: {dummyData.street}</p>
            <p>Postleitzahl: {dummyData.zip}</p>
            <p>Wohnort: {dummyData.city}</p>
            <p>Kleiderart: {dummyData.clothes1}</p>
            <p>Krisengebiet: {dummyData.location1}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default OutputRegistration;
