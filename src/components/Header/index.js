import React, { useEffect } from "react";

import "./Header.css";
// import InstagramLogo from "";
import { useAuth } from "../../AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, SignOut } = useAuth();

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#F8F8F8" }}>
      <Container>
        {user ? (
          <>
            <Navbar.Brand href="/explore">
              <img
                className="Nav-brand-logo"
                src={process.env.PUBLIC_URL + "/images/snapframe-logo.svg"}
                alt="Instagram"
              />
            </Navbar.Brand>
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Nav.Link href="/explore">Explore</Nav.Link>
                  <Nav.Link href={`/user/${user?.userId}`}>Account</Nav.Link>
                  <Nav.Link onClick={SignOut}>Sign Out</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          </>
        ) : (
          <>
            <Navbar.Brand>
              <img
                className="Nav-brand-logo"
                src={process.env.PUBLIC_URL + "/images/logo.jpeg"}
                alt="Instagram"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="/signIn">Sign In</Nav.Link>
                <Nav.Link href="/signUp">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
