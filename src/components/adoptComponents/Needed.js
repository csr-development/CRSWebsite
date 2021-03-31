import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import food from '../../images/adopt/food.jpg';
import learning from '../../images/adopt/learning.jpg';
import transportation from '../../images/adopt/transportation.jpg';

export default function Needed() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "40px", fontWeight: "bold", padding: "30px" }}>
                BASIC NECESSITIES NEEDED
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Container style={{ padding: "30px" }}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <p style={{ fontSize: "22px", paddingTop: "10px" }}>
                            FOOD
            </p>
                        <img style={{ height: "190px", paddingBottom: '20px' }} src={food} />
                        <p style={{ fontSize: "15px", color: "#666", paddingBottom: "30px" }}>
                            Food is one of the most basic needs that most of us are able to take for
                            granted. Unfortunately, one in seven Canadians are food insecure, and many
                            students trade off adequate nutrition to meet their tuition costs (StatCan,
                            2020). Without proper nutrition, brain and body function is severely
                           compromised - impacting their education.</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <p style={{ fontSize: "22px", paddingTop: "10px" }}>
                            EDUCATIONAL SUPPLIES
            </p>
                        <img style={{ height: "190px", paddingBottom: '20px' }} src={learning} />
                        <p style={{ fontSize: "15px", color: "#666", paddingBottom: "30px" }}>
                            Besides tuition, university also comes with the price of textbooks and
                            school supplies. Now, the expensive cost of a laptop has also become a
                        necessary function of an online education.</p>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <p style={{ fontSize: "22px", paddingTop: "10px" }}>
                            TRANSPORTATION
            </p>
                        <img style={{ height: "190px", paddingBottom: '20px' }} src={transportation} />
                        <p style={{ fontSize: "15px", color: "#666", paddingBottom: "30px" }}>
                            To cover some of these mounting costs, many students hold part-time jobs,
                            adding the price of a bus or subway ride. Some must even forego public
                         transportation and make a long walk or bike commute, reducing time spent studying.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
