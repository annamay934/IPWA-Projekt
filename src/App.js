import "../src/App.css";
import React, { useState } from "react";
import Navigation from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import NewRegistration from "./components/NewRegistration/NewRegistration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutputRegistration from "./components/OutputRegistration/OutputRegistration";
import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import ImprintPage from "./pages/Imprint";
import ContactPage from "./pages/Contact";
//import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/imprint", element: <ImprintPage /> },
]);

function App() {
  // const addRegistrationHandler = (registration) => {
  //   console.log("In App.js");
  //   console.log(registration);
  // };

  const [registrationData, setRegistrationData] = useState(null);

  const addRegistrationHandler = (registration) => {
    setRegistrationData(registration);
    console.log(registrationData);
  };

  return (
    <body>
      <RouterProvider router={router} />;
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="background-image"></div>
      </div>
      <section>
        <h1 className="custom-h1">
          Willkommen auf der Homepage von Ihrer Kleiderspendenannahme
        </h1>
        <br />
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
        <NewRegistration onAddRegistration={addRegistrationHandler} />
        <p>
          Sie werden nach der Regstrierung auf eine Bestätigungsseite
          weitergeleitezt, bei dem Sie ihre Eingaben einsehen können.
        </p>
      </section>
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
}

export default App;
