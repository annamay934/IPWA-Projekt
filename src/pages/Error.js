import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <section>
        <h1 className="custom-h1">Ein Problem ist aufgetreten</h1>
        <p>Diese Seite konnte nicht gefunden werden.</p>
      </section>
      <Footer />
    </div>
  );
};

export default ErrorPage;
