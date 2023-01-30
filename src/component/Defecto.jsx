import React from 'react'
import { Col, Row, Container } from "react-bootstrap";

const Defecto = () => {
  return (
    <div>
        <Container >
            <Row style={{height:"100vh" }}>
                <Col className="d-flex" style={{flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    
                    <h1> Error 404 </h1>
                    <h2>Página no encontrada.</h2>
                   
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Defecto