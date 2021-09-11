import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';
import vice_president from '../../images/vice-president.jpg';

export default function Team() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Our Team
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Kamyab Parsa"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Kamyab Parsa
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Founder and President</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={vice_president} alt="Shahin Jafari"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Shahin Jafari
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Vice-President - Internal Relations</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
