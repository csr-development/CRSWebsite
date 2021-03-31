import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import pay_method from '../../images/pay-method.png';
import plan from '../../images/plan.png';
import paypal from '../../images/paypal.jpg';

export default function Donate() {
    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>
                <Col xs={12} md={6} lg={6} style={{ position: "flex", marginTop: '30px' }}>
                    <img style={{ width: '100%' }} src={plan} />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <div>
                        <p style={{ padding: "10px", maxWidth: '500px' }}>
                            Your kind donation will cover 3 meals, help cover the cost of educational supplies,
                            and provide a means of transportation. This donation will go directly to a student
                            with demonstrated financial need and provide the means to continue pursuing their
                    education and dreams.</p>
                        <p style={{ padding: "10px" }}>
                            Every $1 counts - Please make a difference today</p>
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
