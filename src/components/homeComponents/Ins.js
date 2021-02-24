import React from 'react'
import i1 from '../../images/i1.jpg';
import i2 from '../../images/i2.jpg';
import i3 from '../../images/i3.jpg';
import i4 from '../../images/i4.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Ins() {
    return (
        <div style={{ backgroundColor: "#eee" }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ marginTop: "40px", padding: "30px", color: "#a00", fontSize: "40px", fontWeight: "bold" }}>
                    Instagram</h1>
            </div>
            <div style={{ border: "1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ paddingTop: "30px" }}>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <img style={{ height: "240px" }} src={i1} />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <img style={{ height: "240px" }} src={i2} />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <img style={{ height: "240px" }} src={i3} />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <img style={{ height: "240px" }} src={i4} />
                    </Col>
                </Row>
            </Container>
            <div style={{ textAlign: "center" }}>
                <p className="arrow" style={{ marginTop: "40px", padding: "30px", color: "#c00", fontSize: "15px" }}>
                    Follow me on Instagram</p>
            </div>
        </div>
    )
}
