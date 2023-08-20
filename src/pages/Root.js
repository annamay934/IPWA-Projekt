import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="background-image"></div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
