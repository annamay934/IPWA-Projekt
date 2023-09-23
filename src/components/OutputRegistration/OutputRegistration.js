import React from "react";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./../../index.css";

//https://react-bootstrap.netlify.app/docs/components/table/ 03.09.2023 tables

const OutputRegistration = () => {
  const location = useLocation();
  const state = location.state || {}; // Access the state from the location

  console.log("Status korrekt", state);
  console.log("Location State:", location.state);
  //console.log("DummyData:", state.dummyData);
  console.log("RegistrationData:", state.registrationData);

  // Check if a value is an empty string
  const isEmptyString = (value) =>
    typeof value === "string" && value.trim() === "";

  console.log("isEmptyString(location1):", isEmptyString(state.location1));

  if (
    !isEmptyString(state.registrationData.firstName) &&
    !isEmptyString(state.registrationData.lastName) &&
    !isEmptyString(state.registrationData.street) &&
    !isEmptyString(state.registrationData.zip) &&
    !isEmptyString(state.registrationData.city) &&
    !isEmptyString(state.registrationData.clothes2) &&
    !isEmptyString(state.registrationData.location2) &&
    isEmptyString(state.registrationData.clothes1) &&
    isEmptyString(state.registrationData.location1)
  ) {
    console.log("Reached the if block");
    const { firstName, lastName, street, zip, city, clothes2, location2 } =
      state.registrationData;

    return (
      <div>
        <h1 className="custom-h1">Vielen Dank für ihre Spende!</h1>
        <h3 className="custom-h3">
          Ihre Registrierung ist damit abgeschlossen.
        </h3>

        <Table className="table-container">
          <tbody>
            <tr>
              <th>Vorname</th>
              <td>{firstName}</td>
            </tr>
            <tr>
              <th>Nachname</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Straße</th>
              <td>{street}</td>
            </tr>
            <tr>
              <th>Postleitzahl</th>
              <td>{zip}</td>
            </tr>
            <tr>
              <th>Wohnort</th>
              <td>{city}</td>
            </tr>
            <tr>
              <th>Kleiderart</th>
              <td>{clothes2}</td>
            </tr>
            <tr>
              <th>Krisengebiet</th>
              <td>{location2}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  } else if (
    isEmptyString(state.registrationData.firstName) &&
    isEmptyString(state.registrationData.lastName) &&
    isEmptyString(state.registrationData.street) &&
    isEmptyString(state.registrationData.zip) &&
    isEmptyString(state.registrationData.city) &&
    isEmptyString(state.registrationData.clothes2) &&
    isEmptyString(state.registrationData.location2) &&
    !isEmptyString(state.registrationData.clothes1) &&
    !isEmptyString(state.registrationData.location1)
  ) {
    console.log("Reached the else if block");
    const { clothes1, location1 } = state.registrationData;

    return (
      <div>
        <h1 className="custom-h1">Vielen Dank für ihre Spende!</h1>
        <h3 className="custom-h3">
          Ihre Registrierung ist damit abgeschlossen.
        </h3>

        <Table className="table-container">
          <tbody>
            <tr>
              <th>Kleiderart</th>
              <td>{clothes1}</td>
            </tr>
            <tr>
              <th>Krisengebiet</th>
              <td>{location1}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  } else {
    console.log("Reached the else block");

    return (
      <div>
        <section>
          <h1 className="custom-h1">Ein Problem ist aufgetreten</h1>
          <p>Diese Seite konnte nicht gefunden werden.</p>
        </section>
      </div>
    );
  }
};

export default OutputRegistration;
