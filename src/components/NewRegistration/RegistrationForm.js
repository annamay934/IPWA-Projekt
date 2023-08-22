import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const RegistrationForm = (props) => {
  //wenn 1. Formular ausgewählt wird, verschwindet das zweite für den Homepage Besucher
  const [showForm1, setShowForm1] = useState(false);
  const toggleForm1 = () => {
    setShowForm1(!showForm1);
    setShowForm2(false);
  };

  const [showForm2, setShowForm2] = useState(false);
  const toggleForm2 = () => {
    setShowForm2(!showForm2);
    setShowForm1(false);
  };

  //Zustand der Eingabefelder im 1. Formular,  Angabe: Kleiderart und Unterstützungsort
  const [enteredClothes1, setEnteredClothes1] = useState("");
  const [enteredLocation1, setEnteredLocation1] = useState("");

  const clothes1ChangeHandler = (event) => {
    setEnteredClothes1(event.target.value);
  };

  const dropdownLocation1ChangeHandler = (event) => {
    setEnteredLocation1(event.target.value);
  };

  /* Zustand der Eingabefelder im 2. Formular, 
  Angabe: Vorname, Nachname, Straße, PLZ, Wohnort, Kleiderart und Unterstützungsort */
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredZip, setEnteredZip] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredClothes2, setEnteredClothes2] = useState("");
  const [enteredLocation2, setEnteredLocation2] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const streetChangeHandler = (event) => {
    setEnteredStreet(event.target.value);
  };

  const zipChangeHandler = (event) => {
    setEnteredZip(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const clothes2ChangeHandler = (event) => {
    setEnteredClothes2(event.target.value);
  };

  const dropdownLocation2ChangeHandler = (event) => {
    setEnteredLocation2(event.target.value);
  };

  //Unterdrücken des vollständigen Ladens der Homepage
  const submitHandler = (event) => {
    event.preventDefault();

    //Eingabedaten dem Objekt registrationData übergeben
    const registrationData = {
      clothes1: enteredClothes1,
      location1: enteredLocation1,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      street: enteredStreet,
      zip: enteredZip,
      city: enteredCity,
      clothes2: enteredClothes2,
      location2: enteredLocation2,
    };

    //Setzen der Zustände nach Drücken auf "submit" auf leere Zeilenreihen
    props.onSaveRegistrationData(registrationData);
    setEnteredClothes1("");
    setEnteredLocation1("");
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredStreet("");
    setEnteredZip("");
    setEnteredCity("");
    setEnteredClothes2("");
    setEnteredLocation2("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <strong>
          <Button
            type="button"
            onClick={toggleForm1}
            variant="outline-secondary"
          >
            Übergabe an der Geschäftsstelle
          </Button>
        </strong>
        {showForm1 && !showForm2 && (
          <div id="formContainer1">
            <label htmlFor="AbgabeOrt">
              Gemeinnütziger Verein e. V., Mustermannstraße 1, in 12345
              Mustermannstadt
            </label>
            <div className="form-group">
              <label htmlFor="clothes1">Kleiderart:</label>
              <input
                type="text"
                className="form-control text-center"
                id="clothes1"
                name="Kleiderart1"
                value={enteredClothes1}
                onChange={clothes1ChangeHandler}
                placeholder="Hemd, T-Shirt, Hose"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location1">Krisengebiet:</label>
              <select
                type="text"
                className="form-control text-center"
                id="location1"
                name="Krisengebiet1"
                value={enteredLocation1}
                onChange={dropdownLocation1ChangeHandler}
              >
                <option value="Bitte auswählen">Bitte auswählen</option>
                <option value="Libyen">Libyen</option>
                <option value="Somalia">Somalia</option>
                <option value="Süd Sudan">Süd Sudan</option>
                <option value="Zentralafrika">Zentralafrika</option>
                <option value="Sierra Leone">Sierra Leone</option>
              </select>
            </div>
          </div>
        )}
        <div />
        <div className="form-group">
          <strong>
            <Button
              type="button"
              onClick={toggleForm2}
              variant="outline-secondary"
            >
              Abholung
            </Button>
          </strong>
          {showForm2 && !showForm1 && (
            <div id="formContainer">
              <div className="form-group">
                <label htmlFor="firstName">Vorname:</label>
                <input
                  id="firstName"
                  className="form-control text-center"
                  type="text"
                  name="Vorname"
                  placeholder="Maximilian"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nachname:</label>
                <input
                  id="lastName"
                  className="form-control text-center"
                  type="text"
                  name="Nachname"
                  placeholder="Mustermann"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Straße mit Hausnummer:</label>
                <input
                  id="street"
                  className="form-control text-center"
                  type="text"
                  name="Straße"
                  placeholder="Mustermannstraße 3"
                  value={enteredStreet}
                  onChange={streetChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Postleitzahl:</label>
                <input
                  id="zip"
                  className="form-control text-center"
                  type="text"
                  name="Postleitzahl"
                  placeholder="12345"
                  value={enteredZip}
                  onChange={zipChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Wohnort:</label>
                <input
                  id="city"
                  className="form-control text-center"
                  type="text"
                  name="Wohnort"
                  placeholder="Mustermannstadt"
                  value={enteredCity}
                  onChange={cityChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="clothes2">Kleiderart:</label>
                <input
                  id="clothes2"
                  className="form-control text-center"
                  type="text"
                  name="Kleiderart2"
                  placeholder="Hemd, T-Shirt, Hose, Socken"
                  value={enteredClothes2}
                  onChange={clothes2ChangeHandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location2">Krisengebiet:</label>
                <select
                  id="location2"
                  className="form-control text-center"
                  type="text"
                  name="Krisengebiet2"
                  value={enteredLocation2}
                  onChange={dropdownLocation2ChangeHandler}
                >
                  <option value="Bitte auswählen">Bitte auswählen</option>
                  <option value="Libyen">Libyen</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Süd Sudan">Süd Sudan</option>
                  <option value="Zentralafrika">Zentralafrika</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                </select>
              </div>
            </div>
          )}
        </div>
        {(showForm1 || showForm2) && (
          <Button type="submit">Registrieren</Button>
        )}
      </div>
    </form>
  );
};

export default RegistrationForm;
