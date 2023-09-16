import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./../index.css";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="background-image"></div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
