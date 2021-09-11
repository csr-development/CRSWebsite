import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import warzone from '../../images/events/warzone.jpg';

export default function Warzone() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img src={warzone} alt='warzone' />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>CSR Mental Health Week - Call of Duty Warzone Online Tournament</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Challenge your friends to an online COD tournament to win a prize worth $30.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                           TBA<br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}