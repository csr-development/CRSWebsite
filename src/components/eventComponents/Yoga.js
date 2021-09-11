import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yoga from '../../images/events/yoga.jpg';

export default function Yoga() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>CSR Mental Health Week - Yoga with CSR</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Relieve your stress by yoga and streching.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                           TBA<br />
                        </p>
                    </Col>
                    <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
                        <img src={yoga} alt='yoga'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
