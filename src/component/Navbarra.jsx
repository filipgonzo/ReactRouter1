import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbarra = () => {
  return (
    <div>
      <Navbar style={{ background: "rgb(220, 53, 70)" }} variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
            </Link>
            <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            📒 Contacto
            </Link>
          </Nav>
          <Link to="/" className="text-white ms-3 text-decoration-none">
          Happy Cake 🍰
            </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarra;
