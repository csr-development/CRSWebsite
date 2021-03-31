import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coverLetter from '../../images/events/coverLetter.jpg';

export default function CoverLetter() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Events
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img src={coverLetter} />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <p style={{ textAlign: "center", fontSize: "25px", paddingTop: "100px" }}>Cover letter workshop</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666" }}>
                            Don’t miss the opportunity to create your best cover letter yet. Join us on November 20th for more tips.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
