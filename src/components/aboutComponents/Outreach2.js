import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import president from '../../images/president.jpg';

export default function Outreach2() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Navya Goel
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Outreach</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Aarushi Pradhan
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Public Relations</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Tanesha Agrawal
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Public Relations</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: "50%", height: "250px" }} src={president} />
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                            Yulina Zhao
            </p>
                        <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                            Outreach</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
