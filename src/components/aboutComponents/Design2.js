import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Design2() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Minahil Syed"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Minahil Syed
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Design</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt=" Niyati Bhatt" />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Niyati Bhatt
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Design</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} alt="Taranpreet Chhabra"/>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Taranpreet Chhabra
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Design</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
