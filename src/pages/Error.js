import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <body>
        <Navigation />
        <section>
          <h1 className="custom-h1">Ein Problem ist aufgetreten</h1>
          <p>Diese Seite konnte nicht gefunden werden.</p>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default ErrorPage;
