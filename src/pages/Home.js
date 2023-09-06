import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RegistrationForm from "../components/NewRegistration/RegistrationForm";
import OutputRegistration from "../components/OutputRegistration/OutputRegistration";

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook for getting current location
  const [registrationData, setRegistrationData] = useState(null);

  const saveRegistrationDataHandler = (enteredRegistrationData) => {
    const registrationData = {
      ...enteredRegistrationData,
      //id: Math.random().toString(),
    };

    //headers for other backend database, Firebase didnt need it, sending a POST request
    //to send my reistrationdata to backend and get the data from backend
    //sending data to that URL
    fetch(
      "https://kleiderspenden-63c69-default-rtdb.europe-west1.firebasedatabase.app/registrierungsdaten.json",
      {
        method: "POST",
        body: JSON.stringify(registrationData),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //props.onAddRegistration(registrationData);
        console.log(data);
        setRegistrationData(data);

        // Navigation to the OutputRegistration page after saving the data
        navigate("/success", {
          state: {
            registrationData: registrationData,
            //dummyData: dummyData,
          },
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    console.log(registrationData);
  };

  //const [dummyData, setDummyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRegistrationDataHandler = useCallback(() => {
    setIsLoading(true);

    //   const apiUrl =
    //     "https://api.jsonserver.io/UserInputRegistrationForm";
    //   const headers = new Headers();
    //   headers.append("X-Jsio-Token", "00b52ae22cb418afbee530f17a161298");

    //   fetch(apiUrl, { headers })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       //const dataArray = Object.values(data); // Convert the object values to an array
    //       setDummyData(data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("Fetch error:", error);
    //     });
    // }, []);

    const apiUrl =
      "https://kleiderspenden-63c69-default-rtdb.europe-west1.firebasedatabase.app/registrierungsdaten.json";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const transformedRegistrationData = {};

        for (const key in data) {
          transformedRegistrationData[key] = {
            id: key,
            clothes1: [key].clothes1,
            location1: [key].location1,
            firstName: [key].firstName,
            lastName: [key].lastName,
            street: [key].street,
            zip: [key].zip,
            city: [key].city,
            clothes2: [key].clothes2,
            location2: [key].location2,
          };
        }
        setRegistrationData(transformedRegistrationData);

        console.log(transformedRegistrationData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  useEffect(() => {
    fetchRegistrationDataHandler();
  }, [fetchRegistrationDataHandler]);

  //console.log(dummyData);
  //https://kleiderspenden-63c69-default-rtdb.europe-west1.firebasedatabase.app/ 02.09.2023 16:12
  //https://console.firebase.google.com/project/kleiderspenden-63c69/database/kleiderspenden-63c69-default-rtdb/data/~2F

  return (
    <body>
      <section>
        <h1 className="custom-h1">
          Willkommen auf der Homepage von Ihrer Kleiderspendenannahme
        </h1>
        <p>
          Gerne unterstützen wir Sie dabei, Ihren Beitrag zum Klimawandel zu
          leisten. Die Klamotten können entweder an der Geschäftsstelle des
          Vereins persönlich übergeben werden oder von einem Sammelfahrzeug
          abgeholt werden.
        </p>
      </section>

      <section>
        <h2 className="custom-h2">
          Bitte wählen Sie aus den zwei Varianten hier aus:
        </h2>

        <p>
          Sie werden nach der Registrierung auf eine Bestätigungsseite
          weitergeleitet. Damit ist ihre Registrierung erfolgreich gewesen.
        </p>
      </section>

      <RegistrationForm onSaveRegistrationData={saveRegistrationDataHandler} />

      {location.pathname === "/success" && (
        <OutputRegistration
          //displayDummyData={dummyData}
          displayRegistrationData={registrationData}
        />
      )}
      {location.pathname === "/success"}

      <section>
        <h2 className="custom-h2">Unser Engagement für die Umwelt:</h2>
        <p>
          Bei unserer Kleiderspendenaktion geht es nicht nur darum, Menschen in
          Krisengebieten zu helfen, sondern auch die Umwelt zu schonen. Indem
          Sie Ihre Kleidung bei uns spenden, tragen Sie dazu bei, den
          Lebenszyklus von Kleidungsstücken zu verlängern und die
          Ressourcenverschwendung zu reduzieren. Anstatt Kleidung wegzuwerfen,
          geben Sie ihr eine neue Chance und minimieren so den ökologischen
          Fußabdruck der Modeindustrie.
        </p>
      </section>

      <section>
        <h2 className="custom-h2">Nachhaltige Mode:</h2>
        <p>
          Unsere Kleiderspendenaktion geht über die reine Wohltätigkeit hinaus.
          Wir setzen uns für nachhaltige Mode ein und möchten Bewusstsein für
          die Umweltauswirkungen der Textilindustrie schaffen. Mithilfe ihrer
          Spende unterstützen Sie den Gedanken der Kreislaufwirtschaft. Ihre
          Kleidungsstücke werden an Bedürftige weitergegeben oder, falls nötig,
          recycelt, um ihre Ressourcen optimal zu nutzen und Abfall zu
          vermeiden.
        </p>
      </section>

      <section>
        <h2 className="custom-h2">Gemeinschaftliches Engagement:</h2>
        <p>
          Unsere Kleiderspendenannahme ist ein Ort des gemeinschaftlichen
          Engagements. Hier kommen Menschen mit unterschiedlichen Hintergründen
          und Geschichten zusammen, um etwas Gutes zu tun. Wir schaffen einen
          Raum, in dem gegenseitige Unterstützung und Solidarität gedeihen
          können. Wir laden Sie herzlich ein, Teil unserer Gemeinschaft zu
          werden und gemeinsam einen positiven Einfluss auf die Welt zu haben.
        </p>
      </section>

      <section>
        <h2 className="custom-h2">Vielen Dank für Ihre Unterstützung:</h2>
        <p>
          Ohne die großzügige Unterstützung unserer Spenderinnen und Spender
          wäre unsere Arbeit nicht möglich. Wir möchten Ihnen von Herzen für Ihr
          Vertrauen und Ihre Bereitschaft, etwas zu bewegen, danken. Jede
          Spende, sei es eine einzelne Bluse oder eine vollständige Garderobe,
          ist von unschätzbarem Wert und hat einen echten Einfluss auf das Leben
          anderer Menschen. Ihre Großzügigkeit und Mitmenschlichkeit sind
          inspirierend.
        </p>
      </section>
    </body>
  );
};

export default HomePage;
