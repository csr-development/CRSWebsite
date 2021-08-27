import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Communications() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Communications and Social Media
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Julia Sarniak
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Team Lead</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Kanishka Dalwadi
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Communications and Social Media</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Hannah Hormillada
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Communications and Social Media</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Catherine Ngoc Le
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Communications and Social Media</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
