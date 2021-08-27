import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import homeless from '../../images/homeless.jpg';
import four_hands from '../../images/four-hands.jpg';
import love_hand from '../../images/love-hand.jpg';

export default function About() {
    return (
        <Container>
            <div style={{ padding: "30px" }}><h1 style={{ textAlign: "center", color: "#b00", fontSize: "55px" }}>
                About Us</h1></div>
            <div style={{ border: "1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <div style={{ textAlign: "center" }}><img style={{ height: '230px' }} src={homeless} alt='Our Team'/></div>
                    <h4 style={{ textAlign: "center" }}>Our Team</h4>
                            Our wonderful team of committed volunteers thrive to help the community and students.
                              Think you would like to make a change? Get in touch here for more information!
                    </Col>
                <Col xs={12} md={6} lg={4}>
                    <div style={{ textAlign: "center" }}><img style={{ height: '230px' }} src={four_hands} alt='Our History'/></div>
                    <h4 style={{ textAlign: "center" }}>Our History</h4>
                            Seeing a need to support students and student associations, we started a student
                             and student club oriented charity for the first time in Canada.
                        </Col>
                <Col xs={12} md={6} lg={4}>
                    <div style={{ textAlign: "center" }}><img style={{ height: '230px' }} src={love_hand} alt='Our Mission'/></div>
                    <h4 style={{ textAlign: "center" }}>Our Mission</h4>
                            It's simple, but it needs hard work. We do our best to help students and student
                             clubs in anyways we can.
                        </Col>
            </Row>
        </Container>
    )
}
