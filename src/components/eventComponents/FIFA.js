import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fifa from '../../images/events/fifa.jpg';

export default function FIFA() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>CSR Mental Health Week - FIFA Online Tournament</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Challenge your friends to an online Fifa tournament to win a prize worth $25.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                        TBA <br />
                        </p>
                    </Col>
                    <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
                        <img src={fifa} alt="FIFA"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
