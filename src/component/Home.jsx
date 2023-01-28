import React from "react";
import { Col, Row, Container } from "react-bootstrap";


const Home = () => {
  return (
    <div>
      <Container >
        <Row>
          <Col className="d-flex" style={{flexDirection: "column", alignItems: "center", marginTop:"2vh" }}>
            <p style={{fontSize:"60px"}}>
              Bienvenido a <strong>Happy Cake</strong>
            </p>
            <p style={{fontSize:"20px"}}>El lugar de los pasteles felices</p>
            <p style={{fontSize:"100px"}}>🎂</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
