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
import AboutUsPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import RootLayout from "./pages/Root";

//import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/imprint", element: <ImprintPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/aboutus", element: <AboutUsPage /> },
    ],
  },
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
      <RouterProvider router={router}>
        <NewRegistration onAddRegistration={addRegistrationHandler} />
      </RouterProvider>
    </body>
  );
}

export default App;
