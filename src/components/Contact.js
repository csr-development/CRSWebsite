import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
export default function Contact() {
    return (
        <div>
            <Header />
            <Container >
                <h1 className="text-center" style={{ color: 'brown', fontSize: 50, paddingBottom: 30, paddingTop: 30, fontWeight: 'bold' }}>Get Involved</h1>
                <Row>
                    <Col md={6}>
                        <p style={{ paddingBottom: 20, fontSize: 25 }}>Get Involved!</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name*" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email*" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Where did you hear about us?</Form.Label>
                                <Form.Control as="select">
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                    <option>LinkedIN</option>
                                    <option>Twitter</option>
                                    <option>Word of mouth</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Let us know you</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Tell us a little about your previous experience or volunteer work. (Max 200 words)" />
                            </Form.Group>
                            <Button variant="secondary" size="lg" block>
                                SEND
                    </Button>
                        </Form>
                    </Col>

                    <Col md={{ span: 5, offset: 1 }}>
                        <h2>Canadian Student Relief Charity</h2>
                        <br></br><br />
                        It's about time!
                        <br />
                        <br />



                        Despite everything students go through, they work hard to build the future. Our future...
                        <br />
                        <br />


                        It's about time to support them and hear their voices.
                        <br />
                        <br />


                        Our wonderful team of committed volunteers thrive to help the students, student associations and the community. We take pride in what we do. Think you would like to be part of this? Get in touch for more information!
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className="text-center" style={{ color: 'brown', fontSize: 50, paddingBottom: 30, paddingTop: 70, fontWeight: 'bold' }}>Contact Us</h1>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form>
                            <Form.Text className="text-muted" style={{ fontSize: 25, textAlign: 'center' }}>
                                Drop us a line!
                            </Form.Text>
                            <br />

                            <Form.Group controlId="formGridAddress1">
                                {/* <Form.Label>Name*</Form.Label> */}
                                <Form.Control size="lg" type="text" placeholder="Name*" />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicEmail">

                                {/* <Form.Label>Email address*</Form.Label> */}
                                <Form.Control size="lg" type="email" placeholder="Email*" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            <br />

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Control as="textarea" rows={5} placeholder="Message*" />
                            </Form.Group>

                            <Button variant="primary" block >
                                SEND
                            </Button>
                        </Form>
                        <p style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 30 }}>Email us!</p>
                        <div style={{ textAlign: 'center', paddingBottom: 20 }}>
                            <a href="#">Info@csrcharity.ca</a>
                        </div>
                        <h4 style={{ textAlign: 'center', paddingBottom: 20 }}>Canadian Student Relief</h4>
                    </Col>
                </Row>

            </Container>
            <div style={{ paddinTop: 50 }}>
                <Footer />

            </div>

        </div>

    )
}