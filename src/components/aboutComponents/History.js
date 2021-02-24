import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import book from '../../images/book.jpg';
import book2 from '../../images/book2.jpg';



export default function History() {
    const [image, setImage] = useState();
    useEffect(() => {
        setImage(document.documentElement.clientWidth < 960 ? book : book2)
    }, [document.documentElement.clientWidth]);
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>

            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                            Our History
            </p>
                        <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
                        <p style={{ fontSize: "18px", paddingTop: "10px", color: "#666" }}>
                            For the first time in Canada, on March 2019, Canadian Student Relief
                            Charity was founded to support students and student associations. We are
                            proudly working hard every day to support all students and student clubs
                            national wide from all different ethnicities, cultures, sexes, and beliefs.
                            Student poverty is certainly a hidden disease in Canada – that no one
                            talks about. Our mission is to relieve the burden and hardship of students and
                            student associations that are in need. We aim to support students with educational
                            workshops, creating food/aid packages, focusing on mental health, and provide financial
                            supports. In addition,  Canadian Student Relief charity funds
                            the work of student clubs and associations, which ranges from educational
                            endeavors, sports events, religious gatherings, cultural shows, business opportunities,
                            science explorations, and technology fairs. Our family is constantly growing, all thanks
                            to the helping hands of this amazing community. We hope for the day where no student puts
                            education to the side due to any difficulties.
            </p>
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <img src={image} style={{ width: "100%", height: "auto" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
