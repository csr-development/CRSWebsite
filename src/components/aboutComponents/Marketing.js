import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Marketing() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Marketing
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Amreen Mohamed
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Team Lead</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Aneeka Afaq
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Marketing</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Huda Musa
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Marketing </p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Parth Dalwadi
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Marketing</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Vraj Thakkar
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Marketing </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
