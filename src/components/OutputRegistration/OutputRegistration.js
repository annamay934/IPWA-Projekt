import React from "react";

const OutputRegistration = (props) => {
  console.log(props);

  const hasNonEmptyString = (obj) => {
    return Object.values(obj).some(
      (value) => typeof value === "string" && value.trim() !== ""
    );
  };

  console.log(props.displayDummyData);

  if (
    props.displayRegistrationData &&
    hasNonEmptyString(props.displayRegistrationData)
  ) {
    const {
      firstName,
      lastName,
      street,
      zip,
      city,
      clothes1,
      location1,
      clothes2,
      location2,
    } = props.displayRegistrationData;

    return (
      <div>
        <h2>Registrierungsdaten</h2>
        {firstName && <p>Vorname: {firstName}</p>}
        {lastName && <p>Nachname: {lastName}</p>}
        {street && <p>Straße: {street}</p>}
        {zip && <p>Postleitzahl: {zip}</p>}
        {city && <p>Wohnort: {city}</p>}
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
        <div>
          <p>Vorname: {props.displayDummyData.firstName}</p>
          <p>Nachname: {props.displayDummyData.lastName}</p>
          <p>Straße: {props.displayDummyData.street}</p>
          <p>Postleitzahl: {props.displayDummyData.zip}</p>
          <p>Wohnort: {props.displayDummyData.city}</p>
          <p>Kleiderart: {props.displayDummyData.clothes1}</p>
          <p>Krisengebiet: {props.displayDummyData.location1}</p>
        </div>

        {/* <h2>Registrierungsdaten</h2>
            {props.displayDummyData.length > 0 ? (
          <div>
            {props.displayDummyData[0] && <p>{props.displayDummyData[1]}</p>}
            {props.displayDummyData[1] && <p>{props.displayDummyData[1]}</p>}
            {props.displayDummyData[2] && <p>{props.displayDummyData[2]}</p>}
            {props.displayDummyData[3] && <p>{props.displayDummyData[3]}</p>}
            {props.displayDummyData[4] && <p>{props.displayDummyData[4]}</p>}
            {props.displayDummyData[5] && <p>{props.displayDummyData[5]}</p>}
            {props.displayDummyData[6] && <p>{props.displayDummyData[6]}</p>}
          </div>
        ) : (
          <p>Keine Dummy-Daten vorhanden</p>
        )} */}
      </div>
    );
  }
};

export default OutputRegistration;
