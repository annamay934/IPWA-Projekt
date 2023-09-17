import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./../index.css";

const RootLayout = () => {
  return (
    <div className="flex-wrapper">
      <header className="background-image">
        <Navigation />
      </header>
      <div></div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
