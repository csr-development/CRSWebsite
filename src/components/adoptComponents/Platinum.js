import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import pay_method from '../../images/pay-method.png';
import platinum from '../../images/adopt/platinum.jpg';
import paypal from '../../images/paypal.jpg';

export default function Platinum() {
    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>
                <Col xs={12} md={6} lg={6} style={{ position: "flex", marginTop: '40px' }}>
                    <img style={{ width: '100%' }} src={platinum} />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <div>
                        <p style={{ color: "#a00", fontSize: "35px", fontWeight: "bold", padding: "20px" }}>
                            PLATINUM PACKAGE
            </p>
                        <div style={{ border: "0.1px solid #ccc", width: "50px", margin: 'auto' }}></div>
                        <p style={{ padding: "30px" }}>
                            You can sponsor a group of 10 students through this donation and fund the education of the great minds of tomorrow!</p>
                        <div style={{ textAlign: "center", paddingBottom: "50px" }}>
                            <Button variant='danger' style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'rgb(172, 35, 41)' }}>
                                <span style={{ maxWidth: '20px', display: 'flex', display: 'inline-grid' }}>
                                    <img style={{ width: '100%' }} src={paypal} alt='paypal' /></span>
                                <span style={{ padding: '10px', display: 'inline-grid' }}>DONATE NOW</span></Button>
                            <br /><img style={{ height: "20px" }} src={pay_method} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
