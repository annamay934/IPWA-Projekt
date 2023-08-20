import Navigation from "../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <body>
        <section>
          <h1 className="custom-h1">Ein Problem ist aufgetreten</h1>
          <p>Diese Seite konnte nicht gefunden werden.</p>
        </section>
      </body>
    </>
  );
};

export default ErrorPage;
