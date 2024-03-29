import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import conference from '../../images/events/conference.jpg';

export default function Conference() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <img style={{ maxWidth: "100%" }} src={conference} alt="Conference"/>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>Personal Brand Mastery Conference</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Learn from business leaders how to grow your business by personal branding, and network with hundreds of like-minded professionals.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                           TBA<br />
                        </p>
                        <Button style={{ backgroundColor: "#a22" }} variant="danger">BOOK MY TICKETS</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}