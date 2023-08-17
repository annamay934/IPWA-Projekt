import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar-brand1">
      <div className="container-fluid">
        <footer>
          <Link className="navbar-brand1" to="/privacy">
            Datenschutz
          </Link>
          <Link className="navbar-brand1" to="/imprint">
            Impressum
          </Link>
        </footer>
      </div>
    </nav>
  );
};

export default Footer;
