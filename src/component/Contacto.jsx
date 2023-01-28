import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>

          <p style={{ fontSize: "60px" }}>
            Cuentanos, ¿en que te podemos ayudar?
          </p>
            
          <Form
            className="d-flex"
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ textAlign: "center", width: "70vw", }}
            >
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{ textAlign: "center", width: "70vw", }}
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <boton
              className="d-flex"
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2vh",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{ background: "rgb(220, 53, 70)" }}
              >
                Enviar
              </Button>
            </boton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
