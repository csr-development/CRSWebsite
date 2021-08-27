import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import pay_method from '../../images/pay-method.png';
import gold from '../../images/adopt/gold.jpg';
import paypal from '../../images/paypal.jpg';

export default function Gold() {
    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>
                <Col xs={12} md={6} lg={6} style={{ position: "flex", marginTop: '40px' }}>
                    <img style={{ width: '100%' }} src={gold} />
                </Col>
                <Col xs={12} md={6} lg={6} style={{ backgroundColor: '#eee' }}>
                    <div>
                        <p style={{ color: "#a00", fontSize: "35px", fontWeight: "bold", padding: "20px" }}>
                            GOLD PACKAGE
            </p>
                        <div style={{ border: "0.1px solid #ccc", width: "50px", margin: 'auto' }}></div>
                        <p style={{ padding: "30px" }}>
                            You can sponsor a group of 20 students through this donation and provide even more aid!</p>
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
