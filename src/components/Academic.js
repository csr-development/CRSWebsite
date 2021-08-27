import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';

export default function Academic() {
    return (
        <div>
            <Header />
            <div style={{ textAlign: "center" }}>
                <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                    Academics
            </p>
                <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
                <Container style={{ padding: "30px" }}>
                    <Row style={{ padding: "30px" }}>
                        <Col xs={12} md={6} lg={6}>
                            <p style={{ textAlign: "center", fontSize: "22px" }}>Highschool</p>
                            <p style={{ textAlign: "center", fontSize: "15px", color: "#666" }}>
                                All the initiatives and relevant documents for highschool students. </p>
                            <Button style={{ backgroundColor: "#b22", padding: "16px", fontSize: "14px", fontWeight: "bold" }}>FIND  OUT  MORE</Button>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p style={{ textAlign: "center", fontSize: "22px" }}>University</p>
                            <p style={{ textAlign: "center", fontSize: "15px", color: "#666" }}>
                                All the initiatives and relevant documents for university students. </p>
                            <Button style={{ backgroundColor: "#b22", padding: "16px", fontSize: "14px", fontWeight: "bold" }}>FIND  OUT  MORE</Button>
                        </Col>
                    </Row>
                    <Row style={{ padding: "30px" }}>
                        <Col xs={12} md={6} lg={6}>
                            <p style={{ textAlign: "center", fontSize: "22px" }}>Finance</p>
                            <p style={{ textAlign: "center", fontSize: "15px", color: "#666" }}>
                                Learn about managing your personal finances. </p>
                            <Button style={{ backgroundColor: "#b22", padding: "16px", fontSize: "14px", fontWeight: "bold" }}>FIND  OUT  MORE</Button>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <p style={{ textAlign: "center", fontSize: "22px" }}>Scholarship</p>
                            <p style={{ textAlign: "center", fontSize: "15px", color: "#666" }}>
                                Learn about available scholarships and how to apply for them.  </p>
                            <Button style={{ backgroundColor: "#b22", padding: "16px", fontSize: "14px", fontWeight: "bold" }}>FIND  OUT  MORE</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}