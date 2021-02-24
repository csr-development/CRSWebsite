import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import pay_method from '../../images/pay-method.png';
import plan from '../../images/plan.png';

export default function Donate() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} lg={6} style={{ position: "relative" }}>
                    <div style={{
                        background: `url(${plan}) no-repeat center`,
                        backgroundSize: "cover",
                        padding: "120px"
                    }}></div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <div>
                        <h1 style={{ color: "red", textAlign: "center" }}>MAKE A DIFFERENCE</h1>
                        <div style={{ padding: "10px" }}>
                            Your can help cover at least 3 meals, the cost of educational supplies,
                            and provide a student with a means of transportation. This donation will
                            go directly to a student with demonstrated financial need and provide the
                                  means to continue pursuing their education and dreams.</div>
                        <div style={{ textAlign: "center", paddingBottom: "50px" }}>
                            <Button variant="danger">DONATE NOW</Button>
                            <br /><img style={{ height: "20px" }} src={pay_method} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
