import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

  //mit einer ersten Validierung den Vornamen prüfen
  const [enteredClothes1Touched, setEnteredClothes1Touched] = useState(false);
  const [enteredLocation1Touched, setEnteredLocation1Touched] = useState(false);

  //enteredClothes1Valid ist valide, wenn enteredClothes1 nicht leer ist
  const enteredClothes1IsValid = enteredClothes1.trim() !== "";
  const enteredLocation1IsValid = enteredLocation1.trim() !== "";

  //hat der User das Feld berührt/reingeklickt
  const clothes1InputIsInvalid =
    !enteredClothes1IsValid && enteredClothes1Touched;

  const location1InputIsInvalid =
    !enteredLocation1IsValid && enteredLocation1Touched;

  //Variable für Validierung Form1 erstellen
  let formIsValid1 = false;

  //Form1 Validation state change, depends on different user inputs
  if (enteredClothes1IsValid && enteredLocation1IsValid) {
    formIsValid1 = true;
  }

  //BlurHandler for firstName, User tips in field writes and cancel
  const clothes1InputBlurHandler = (event) => {
    setEnteredClothes1Touched(true);
  };

  //BlurHandler for location1, User tips in field writes and cancel
  const location1InputBlurHandler = (event) => {
    setEnteredLocation1Touched(true);
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

  //mit einer ersten Validierung den Vornamen prüfen
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  const [enteredStreetTouched, setEnteredStreetTouched] = useState(false);
  const [enteredZipTouched, setEnteredZipTouched] = useState(false);
  const [enteredCityTouched, setEnteredCityTouched] = useState(false);
  const [enteredClothes2Touched, setEnteredClothes2Touched] = useState(false);
  const [enteredLocation2Touched, setEnteredLocation2Touched] = useState(false);

  //enteredFirstNameIsValid ist valide, wenn enteredFirstName nicht leer ist
  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const enteredStreetIsValid = enteredStreet.trim() !== "";
  const enteredZipIsValid = enteredZip.trim() !== "";
  const enteredCityIsValid = enteredCity.trim() !== "";
  const enteredClothes2IsValid = enteredClothes2.trim() !== "";
  const enteredLocation2IsValid = enteredLocation2.trim() !== "";

  //hat der User das Feld berührt/reingeklickt
  const firstNameInputIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const lastNameInputIsInvalid =
    !enteredLastNameIsValid && enteredLastNameTouched;

  const streetInputIsInvalid = !enteredStreetIsValid && enteredStreetTouched;

  const zipInputIsInvalid = !enteredZipIsValid && enteredZipTouched;

  const cityInputIsInvalid = !enteredCityIsValid && enteredCityTouched;

  const clothes2InputIsInvalid =
    !enteredClothes2IsValid && enteredClothes2Touched;

  const location2InputIsInvalid =
    !enteredLocation2IsValid && enteredLocation2Touched;

  //Variable für Validierung Form2 erstellen
  let formIsValid2 = false;

  //Form2 Validation state change, depends on different user inputs
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredStreetIsValid &&
    enteredZipIsValid &&
    enteredCityIsValid &&
    enteredClothes2IsValid &&
    enteredLocation2IsValid
  ) {
    formIsValid2 = true;
  }

  //BlurHandler for firstName, User tips in field writes and cancel
  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };

  //BlurHandler for lastName, User tips in field writes and cancel
  const lastNameInputBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
  };

  //BlurHandler for lastName, User tips in field writes and cancel
  const streetInputBlurHandler = (event) => {
    setEnteredStreetTouched(true);
  };

  //BlurHandler for lastName, User tips in field writes and cancel
  const zipInputBlurHandler = (event) => {
    setEnteredZipTouched(true);
  };

  //BlurHandler for lastName, User tips in field writes and cancel
  const cityInputBlurHandler = (event) => {
    setEnteredCityTouched(true);
  };

  //BlurHandler for lastName, User tips in field writes and cancel
  const clothes2InputBlurHandler = (event) => {
    setEnteredClothes2Touched(true);
  };

  //BlurHandler for location2, User tips in field writes and cancel
  const location2InputBlurHandler = (event) => {
    setEnteredLocation2Touched(true);
  };

  //Unterdrücken des vollständigen Ladens der Homepage
  const submitHandler = (event) => {
    event.preventDefault();

    //Form1
    setEnteredClothes1Touched(true);
    setEnteredLocation1Touched(true);

    //Form2
    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredStreetTouched(true);
    setEnteredZipTouched(true);
    setEnteredCityTouched(true);
    setEnteredClothes2Touched(true);
    setEnteredLocation2Touched(true);

    //if enteredFirstName is not valid, cancel submit
    if (
      !enteredClothes1IsValid &&
      !enteredLocation1IsValid &&
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredStreetIsValid &&
      !enteredZipIsValid &&
      !enteredCityIsValid &&
      !enteredClothes2IsValid &&
      !enteredLocation2IsValid
    ) {
      return;
    }

    //From1
    setEnteredClothes1("");
    setEnteredLocation1("");

    //Form2
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredStreet("");
    setEnteredZip("");
    setEnteredCity("");
    setEnteredClothes2("");
    setEnteredLocation2("");

    //Form1
    setEnteredClothes1Touched(false);
    setEnteredLocation1Touched(false);

    //Form2
    setEnteredFirstNameTouched(false);
    setEnteredLastNameTouched(false);
    setEnteredStreetTouched(false);
    setEnteredZipTouched(false);
    setEnteredCityTouched(false);
    setEnteredClothes2Touched(false);
    setEnteredLocation2Touched(false);

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

    console.log(formIsValid1);
    console.log(formIsValid2);
  };

  //invalid Aussehen hinzufügen für die Felder, https://react-bootstrap.netlify.app/docs/forms/overview/ 30.08.2023
  //Form1
  const form1InputClasses =
    clothes1InputIsInvalid || location1InputIsInvalid
      ? "form-group invalid"
      : "form-group";

  const form2InputClasses =
    firstNameInputIsInvalid ||
    lastNameInputIsInvalid ||
    streetInputIsInvalid ||
    zipInputIsInvalid ||
    cityInputIsInvalid ||
    clothes2InputIsInvalid ||
    location2InputIsInvalid
      ? "form-group invalid"
      : "form-group";

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
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
          <Form.Group id="formContainer1" className={form1InputClasses}>
            <Form.Label htmlFor="AbgabeOrt">
              Gemeinnütziger Verein e. V., Mustermannstraße 1, in 12345
              Mustermannstadt
            </Form.Label>
            <Form.Group>
              <Form.Label htmlFor="clothes1">Kleiderart</Form.Label>
              <Form.Control
                type="text"
                className="form-control text-center"
                id="clothes1"
                name="Kleiderart1"
                value={enteredClothes1}
                onChange={clothes1ChangeHandler}
                placeholder="Hemd, T-Shirt, Hose"
                onBlur={clothes1InputBlurHandler}
              />
              {clothes1InputIsInvalid && (
                <p className="error-text">Kleiderart bitte angeben</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="location1">Krisengebiet</Form.Label>
              <select
                type="text"
                className="form-control text-center"
                id="location1"
                name="Krisengebiet1"
                value={enteredLocation1}
                onChange={dropdownLocation1ChangeHandler}
                onBlur={location1InputBlurHandler}
              >
                <option value="Bitte auswählen">Bitte auswählen</option>
                <option value="Libyen">Libyen</option>
                <option value="Somalia">Somalia</option>
                <option value="Süd Sudan">Süd Sudan</option>
                <option value="Zentralafrika">Zentralafrika</option>
                <option value="Sierra Leone">Sierra Leone</option>
              </select>
              {location1InputIsInvalid && (
                <p className="error-text">Krisengebiet bitte angeben</p>
              )}
              <Form.Text className="text-muted">
                We will never share your infos with anyone.
              </Form.Text>
            </Form.Group>
          </Form.Group>
        )}

        <Form.Group className={form2InputClasses}>
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
            <Form.Group id="formContainer">
              <Form.Group>
                <Form.Label htmlFor="firstName">Vorname</Form.Label>
                <Form.Control
                  id="firstName"
                  className="form-control text-center"
                  type="text"
                  name="Vorname"
                  placeholder="Maximilian"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameInputBlurHandler}
                />
                {firstNameInputIsInvalid && (
                  <p className="error-text">Vorname bitte angeben</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="lastName">Nachname</Form.Label>
                <Form.Control
                  id="lastName"
                  className="form-control text-center"
                  type="text"
                  name="Nachname"
                  placeholder="Mustermann"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameInputBlurHandler}
                />
                {lastNameInputIsInvalid && (
                  <p className="error-text">Nachname bitte angeben</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="street">Straße mit Hausnummer</Form.Label>
                <Form.Control
                  id="street"
                  className="form-control text-center"
                  type="text"
                  name="Straße"
                  placeholder="Mustermannstraße 3"
                  value={enteredStreet}
                  onChange={streetChangeHandler}
                  onBlur={streetInputBlurHandler}
                />
                {streetInputIsInvalid && (
                  <p className="error-text">Straße bitte angeben</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="zip">Postleitzahl</Form.Label>
                <Form.Control
                  id="zip"
                  className="form-control text-center"
                  type="text"
                  name="Postleitzahl"
                  placeholder="12345"
                  value={enteredZip}
                  onChange={zipChangeHandler}
                  onBlur={zipInputBlurHandler}
                />
                {zipInputIsInvalid && (
                  <p className="error-text">Postleitzahl bitte angeben</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="city">Wohnort</Form.Label>
                <Form.Control
                  id="city"
                  className="form-control text-center"
                  type="text"
                  name="Wohnort"
                  placeholder="Mustermannstadt"
                  value={enteredCity}
                  onChange={cityChangeHandler}
                  onBlur={cityInputBlurHandler}
                />
                {cityInputIsInvalid && (
                  <p className="error-text">Wohnort bitte angeben</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="clothes2">Kleiderart</Form.Label>
                <Form.Control
                  id="clothes2"
                  className="form-control text-center"
                  type="text"
                  name="Kleiderart2"
                  placeholder="Hemd, T-Shirt, Hose, Socken"
                  value={enteredClothes2}
                  onChange={clothes2ChangeHandler}
                  onBlur={clothes2InputBlurHandler}
                />
                {clothes2InputIsInvalid && (
                  <p className="error-text">Kleiderart bitte angeben</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="location2">Krisengebiet</Form.Label>
                <select
                  id="location2"
                  className="form-control text-center"
                  type="text"
                  name="Krisengebiet2"
                  value={enteredLocation2}
                  onChange={dropdownLocation2ChangeHandler}
                  onBlur={location2InputBlurHandler}
                >
                  <option value="Bitte auswählen">Bitte auswählen</option>
                  <option value="Libyen">Libyen</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Süd Sudan">Süd Sudan</option>
                  <option value="Zentralafrika">Zentralafrika</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                </select>
                {location2InputIsInvalid && (
                  <p className="error-text">Krisengebiet bitte angeben</p>
                )}
                <Form.Text className="text-muted">
                  We will never share your infos with anyone.
                </Form.Text>
              </Form.Group>
            </Form.Group>
          )}
        </Form.Group>
        {(showForm1 || showForm2) && (
          <Button
            variant="primary"
            type="submit"
            disabled={!formIsValid1 && !formIsValid2}
          >
            Registrieren
          </Button>
        )}
      </Form.Group>
    </Form>
  );
};

export default RegistrationForm;
