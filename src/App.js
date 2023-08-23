import "../src/App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import OutputRegistration from "./components/OutputRegistration/OutputRegistration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import ImprintPage from "./pages/Imprint";
import ContactPage from "./pages/Contact";
import AboutUsPage from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/success",
        element: <OutputRegistration />,
      },
      { path: "/contact", element: <ContactPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/imprint", element: <ImprintPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/aboutus", element: <AboutUsPage /> },
    ],
  },
]);

const App = () => {
  // const [registrationData, setRegistrationData] = useState(null);

  // const addRegistrationHandler = (registration) => {
  //   setRegistrationData(registration);
  //   console.log(registrationData);
  // <HomePage onAddRegistration={addRegistrationHandler} />
  // };

  return (
    <RouterProvider router={router}>
      <HomePage />
    </RouterProvider>
  );
};

export default App;
