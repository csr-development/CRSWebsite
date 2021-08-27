import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import donate from '../../images/events/donate.jpg';

export default function Donate() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img src={donate} />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>Student FoodRun Campaign</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Join us in supporting local students in need with food packages during the pandemic.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                            Registered Participants
                        </p>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#999" }}>Everyone</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                            May. 18th 2020 to July. 18th 2020 <br />5 P.M (EST)
                        </p>
                        <Button style={{ backgroundColor: "#a22" }} variant="danger">DONATE NOW</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}