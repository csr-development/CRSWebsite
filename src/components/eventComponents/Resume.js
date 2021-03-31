import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resume from '../../images/events/resume.jpg';

export default function Resume() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
                        <p style={{ textAlign: "center", fontSize: "25px", paddingTop: "100px" }}>Resume Workshop</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666" }}>
                            Don’t miss the opportunity to create your best resume yet. Join us on November 16th for more tips.</p>
                    </Col>
                    <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
                        <img src={resume} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
