import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import defaultLogo from "../../assets/new logo shamra.png";
import { setLanguage, useLang } from "../../i18n/Layout18n";

const NavBar = () => {
  const lang = useLang();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={defaultLogo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#locations">LOCATIONS</Nav.Link>
              <Nav.Link href="#contact">CONTACT INFO</Nav.Link>
              <button
                style={{ background: lang == "ar" ? "red" : "" }}
                onClick={() => {
                  setLanguage("ar");
                }}
              >
                ع
              </button>
              <button
              style={{ background: lang == "en" ? "red" : "" }}
                onClick={() => {
                  setLanguage("en");
                }}
              >
                En
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
