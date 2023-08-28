import React from "react";
import { useLocation } from "react-router-dom";

const OutputRegistration = () => {
  const location = useLocation();
  const state = location.state || {}; // Access the state from the location

  console.log("Status korrekt", state);
  console.log("Location State:", location.state);
  console.log("DummyData:", state.dummyData);
  console.log("RegistrationData:", state.registrationData);

  // Check if a value is an empty string
  const isEmptyString = (value) =>
    typeof value === "string" && value.trim() === "";

  console.log(
    "isEmptyString(clothes1):",
    isEmptyString(state.dummyData.clothes1)
  );
  console.log("isEmptyString(location1):", isEmptyString(state.location1));

  if (
    isEmptyString(state.registrationData.clothes1) &&
    isEmptyString(state.registrationData.location1)
  ) {
    console.log("Reached the if block");
    const { firstName, lastName, street, zip, city, clothes2, location2 } =
      state.registrationData;

    return (
      <div>
        <h2>Registrierungsdaten</h2>
        {firstName && <p>Vorname: {firstName}</p>}
        {lastName && <p>Nachname: {lastName}</p>}
        {street && <p>Straße: {street}</p>}
        {zip && <p>Postleitzahl: {zip}</p>}
        {city && <p>Wohnort: {city}</p>}
        {clothes2 && <p>Kleiderart: {clothes2}</p>}
        {location2 && <p>Krisengebiet: {location2}</p>}
      </div>
    );
  } else if (
    isEmptyString(state.registrationData.firstName) &&
    isEmptyString(state.registrationData.lastName) &&
    isEmptyString(state.registrationData.street) &&
    isEmptyString(state.registrationData.zip) &&
    isEmptyString(state.registrationData.city) &&
    isEmptyString(state.registrationData.clothes2) &&
    isEmptyString(state.registrationData.location2)
  ) {
    console.log("Reached the else if 1 block");
    const { clothes1, location1 } = state.registrationData;

    return (
      <div>
        <h2>Registrierungsdaten</h2>
        {clothes1 && <p>Kleiderart: {clothes1}</p>}
        {location1 && <p>Krisengebiet: {location1}</p>}
      </div>
    );
  } else if (isEmptyString(state.registrationData)) {
    console.log("Reached the else if 2 block");
    console.log("Dummy Data:", state.dummyData);
    return (
      <div>
        <h2>Registrierungsdaten</h2>
        <div>
          <p>Vorname: {state.dummyData.firstName}</p>
          <p>Nachname: {state.dummyData.lastName}</p>
          <p>Straße: {state.dummyData.street}</p>
          <p>Postleitzahl: {state.dummyData.zip}</p>
          <p>Wohnort: {state.dummyData.city}</p>
          <p>Kleiderart: {state.dummyData.clothes1}</p>
          <p>Krisengebiet: {state.dummyData.location1}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No data given</p>
      </div>
    );
  }
};

export default OutputRegistration;
