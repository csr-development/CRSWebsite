import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import development from '../../images/events/development.jpg';

export default function Development() {
    return (
        <div style={{ textAlign: "center" }}>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={{ span: 12, order: "last" }} md={{ span: 12, order: "last" }} lg={{ span: 6, order: "first" }}>
                        <p style={{ textAlign: "center", fontSize: "25px" }}>Professional Development Conference for Immigrants (PDCI)</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", padding: "10px" }}>
                            Network with and learn from super-successful immigrants in Canada. There will be panels on medical sciences,
                         engineering, business, and culture/community.<br />PDCI</p>
                        <p style={{ textAlign: "center", fontSize: "15px", color: "#666" }}>
                            Professional Development Conference for Immigrants. This event is
                              non-political, non-partisan, and non-religious.</p>
                        <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", color: "#666", paddingTop: "10px" }}>
                           TBA<br />
                        </p>
                        <Button style={{ backgroundColor: "#a22" }} variant="danger">FIND OUT MORE</Button>
                    </Col>
                    <Col xs={{ span: 12, order: "first" }} md={{ span: 12, order: "first" }} lg={{ span: 6, order: "last" }}>
                        <img style={{ maxWidth: "100%" }} src={development} alt="development"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
