import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import dresses from "../../jpg/dresses.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img className="img" src={dresses} alt="Kleider Bild" />
        <Link to="/" className="navbar-brand">
          Kleiderspendenannahme
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/contact" className="nav-link">
              Kontakt
            </Link>
            <NavDropdown title="Mehr" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.instagram.com/Kleiderspenden"
                className="nav-link"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.facebook.com/Kleiderspenden"
                className="nav-link"
              >
                Facebook
              </NavDropdown.Item>
              <Link to="/services" className="nav-link">
                Unsere Leistungen
              </Link>
              <NavDropdown.Divider />
              <Link to="/aboutus" className="nav-link">
                Über uns
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
