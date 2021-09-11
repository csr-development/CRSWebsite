import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Advisors() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Advisors
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Neda Azarmipour"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Neda Azarmipour
            </p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Brian Bahadori"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Brian Bahadori
            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
