import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import dresses from "../../jpg/dresses.jpg";
//import { Link } from "react-router-dom";
//import logo from "./logo.svg";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">Kleiderspendenannahme</Navbar.Brand>
        <img className="img" width="50" src={dresses} alt="Kleider Bild" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/contact">Kontakt</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item to="https://www.instagram.com/Kleiderspenden">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item to="https://www.facebook.com/Kleiderspenden">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item to="/services">
                Unsere Leistungen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/aboutus">Über uns</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
