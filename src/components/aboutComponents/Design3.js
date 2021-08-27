import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Design3() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Dorothy Frimpong
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Photography</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Manav Muthreja
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Photography</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
