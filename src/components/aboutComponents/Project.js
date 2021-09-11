import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Project() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Project Management
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Rachel Nedialkov"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Rachel Nedialkov
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Project Manager</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Ansh Patel" />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Ansh Patel
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Project Management</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Niyousha Tanbakouie" />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Niyousha Tanbakouie
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Project Management</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
