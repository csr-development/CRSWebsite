import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import websiteDesigner from "../../images/Internships/WebsiteDesigner.jpg";
import "../CSS/AvailablePositionChildPages.css";
export default function WebsiteDesigner() {
    return(
        <div>
            <Header />
            <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "30px" , paddingBottom:"20px"}}>Website or App Developer</p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto"}}></div>
            <div id="content">
                <Row style={{ paddingTop: "30px" , paddingBottom:"20px"}}>
                    <Col md={6}>
                    <img style={{maxWidth:"100%", maxHeight:"100%", height:"auto", width:"500px"}} src={websiteDesigner} alt='Web designer'/>
                    </Col>
                    <Col style={{ paddingRight: "30px" }}>
                        <p style={{fontSize:"18px", textAlign:"left"}}>Exciting positions are available in web development and app development, respectively. You will be able to get the experience and responsibility of developing a website and app from scratch!</p>
                        <p style={{textAlign:"left", textDecoration:"underline", fontWeight:"Bold"}}>Skills required</p>
                        <ul style={{textAlign:"left"}}>
                        <li>Experience developing Android or iOS applications</li> 
                        </ul>
                        <p>OR</p>
                        <ul style={{textAlign:"left"}}>    
                            <li>Experience developing websites, optimizing UI/UX</li>

                            <li>Familiar with HTML and CSS</li>

                             <li> Familiar with web server hosting</li>
                            
                             <button style={{background: "#b22", border: "none", outline: "none", color: "white", margin: "15px 0", float: "left", padding: "16px", fontSize: "15px" , fontWeight: "600"}}>APPLY NOW</button>
                             
                        </ul>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
        
    )
}