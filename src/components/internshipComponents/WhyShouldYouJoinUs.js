import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyShouldYouJoinUs from '../../images/Internships/WhyShouldYouJoinUs.jpg';


export default function WhyShouldYouJoinUs(){
    return(
        <div>
            <div style={{ textAlign: "center" }}>
                <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", paddingTop: "30px" }}>
                    Why Should You Join Us?
                </p>
            </div>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <Row style={{padding:"30px"}}>
                        <Col xs={12} md={12} lg={4} >
                        <img style={{maxWidth:"400px", maxHeight:"400px", width: "100%",  height: "100%", paddingBottom:"15px"}} src={whyShouldYouJoinUs} />
                        </Col>
                        <Col xs={12} md={12} lg={8}>
                            Over time you will learn how to handle different aspects of a company, such as communicating and networking with                              other organizations, managing finances, and working closely in teams to plan and execute events. Additionally, 
                             you will be able to use this opportunity to improve your resume, receive recommendation letters, and references 
                             for your future jobs. And last but not least, you will make deep connections with our team and might even find 
                             your life-long friends!  
                        </Col>
                    </Row>
            </div>
    )
}