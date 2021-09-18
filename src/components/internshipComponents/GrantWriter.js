
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import grantWriter from "../../images/Internships/GrantWriter.jpg";
import digitalMarketingOfficer from "../../images/Internships/DigitalMarketingOfficer.jpg";
import "../CSS/AvailablePositionChildPages.css";
export default function GrantWriter() {
    return(
        <div>
            <Header />
            <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "30px" , paddingBottom:"20px"}}>Digital Marketing Intern</p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto"}}></div>
            <div id="content">
                <Row style={{ paddingTop: "30px" , paddingBottom:"20px"}}>
                    <Col md={6}>
                    <img style={{maxWidth:"100%", maxHeight:"100%", height:"auto", width:"500px"}} src={grantWriter} alt='writer'/>
                    </Col>
                    <Col style={{ paddingRight: "30px" }}>
                        <p style={{fontSize:"18px", textAlign:"left"}}>The responsibilities of the grant writer primarily include writing applications to apply for grants and bursaries. This position requires excellent literacy skills, ability to meet deadlines, and manage time to complete multiple projects at the same time. He or she is also responsible for continuously finding new opportunities to apply for grants that aid CSR financially. The grant writer works closely with the Outreach Coordinator to exchange useful information.</p>
                        <p style={{textAlign:"left", textDecoration:"underline", fontWeight:"Bold"}}>Skills required</p>
                        
                        <ul style={{textAlign:"left"}}>    
                            <li> Excellent written and oral communication skills</li>

                            <li>Ability to provide excellent work under tight deadlines</li>

                             <li> Excellent research and networking skills</li>
                             
                             <button style={{background: "#b22", border: "none", outline: "none", color: "white", margin: "15px 0", float: "left", padding: "16px", fontSize: "15px" , fontWeight: "600"}}>APPLY NOW</button>
                             
                        </ul>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
        
    )
}