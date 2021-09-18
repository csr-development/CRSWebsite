
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import digitalMarketingOfficer from "../../images/Internships/DigitalMarketingOfficer.jpg";
import "../CSS/AvailablePositionChildPages.css";
export default function DigitalMarketing() {
    return(
        <div>
            <Header />
            <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "30px" , paddingBottom:"20px"}}>Digital Marketing Intern</p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto"}}></div>
            <div id="content">
                <Row style={{ paddingTop: "30px" , paddingBottom:"20px"}}>
                    <Col md={6}>
                    <img style={{maxWidth:"100%", maxHeight:"100%", height:"auto", width:"500px"}} src={digitalMarketingOfficer}alt='digital marketing officer'/>
                    </Col>
                    <Col style={{ paddingRight: "30px" }}>
                        <p style={{fontSize:"18px", textAlign:"left"}}>This person is responsible for developing, implementing, and managing marketing aspects that promote our organization and our campaigns. They will play a major role in enhancing our brand on social media (i.e. Instagram, Facebook, Twitter, LinkedIn, TikTok), as well as our website.</p>
                        <p style={{textAlign:"left", textDecoration:"underline", fontWeight:"Bold"}}>Skills required</p>
                        
                        <ul style={{textAlign:"left"}}>    
                            <li>Previous experience with all social media platforms</li>

                            <li>Excellent time management skills to manage all social media platforms regularly</li>

                             <li> Creative skills to generate attractive content</li>
                             <li> Excellent writing skills to provide interesting captions</li>
                             <button style={{background: "#b22", border: "none", outline: "none", color: "white", margin: "15px 0", float: "left", padding: "16px", fontSize: "15px" , fontWeight: "600"}}>APPLY NOW</button>
                             
                        </ul>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
        
    )
}