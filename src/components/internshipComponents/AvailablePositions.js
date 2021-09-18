import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import websiteDesigner from "../../images/Internships/WebsiteDesigner.jpg";
import grantWriter from "../../images/Internships/GrantWriter.jpg";
import digitalMarketingOfficer from "../../images/Internships/DigitalMarketingOfficer.jpg";
import financeDirector from "../../images/Internships/FinanceDirector.jpg";
import outreachCoordinator from "../../images/Internships/OutreachCoordinator.jpg";
import marketingSpecialist from "../../images/Internships/MarketingSpecialist.jpg";
import photographer from "../../images/Internships/Photographer.jpg";
import legalAffairs from "../../images/Internships/LegalAffairs.jpg";
import vicePresidentExternal from "../../images/Internships/VicePresidentExternal.jpg";
import academicAffairs from "../../images/Internships/AcademicAffairs.jpg";
import publicRelations from "../../images/Internships/PublicRelations.jpg";
import humanResources from "../../images/Internships/HumanResources.jpg";
import careerAndProfessionalDevelopment from "../../images/Internships/CareerAndProfessionalDevelopment.jpg";
import sportsCordinator from "../../images/Internships/SportsCordinator.jpg";
import communicationDirector from "../../images/Internships/CommunicationDirector.jpg";
import vicePresidentInternal from "../../images/Internships/VicePresidentInternal.jpg";
import videographer from "../../images/Internships/Videographer.jpg";
import videoEditor from "../../images/Internships/VideoEditor.jpg";
import {BrowserRouter as Router} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import Route from 'react-router-dom'
import { browserHistory } from "react-router-dom";
import "../CSS/AvailablePosition.css";

export default function AvailablePositions() {
        return(
            <div style={{ textAlign: "center", margin:"30px"}}>
                    <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "10px" }}>
                    Available Positions
                    </p>
                    <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
                    <div id="AvailablePositions">
                        <div className="card">
                            <p>Website Designer</p>
                            <img src={websiteDesigner} alt='web designer'/>
                            <div className="content">
                            <Link to="/websiteDesigner">
                            <button>FIND  OUT  MORE</button>
                            </Link>
                            </div>
                        </div>
                        <div className="card">
                            <p>Grant Writer</p>
                            <img src={grantWriter} alt='writer'/>
                            <div className="content">
                            <Link to="/GrantWriter">
                            <button>FIND  OUT  MORE</button>
                            </Link>
                            </div>
                        </div>
                        <div className="card">
                            <p>Digital Marketing Officer</p>
                            <img src={digitalMarketingOfficer} alt='digital marketing officer'/>
                            <div className="content">
                            <Link to="/DigitalMarketing">
                            <button>FIND  OUT  MORE</button>
                            </Link>
                            </div>
                        </div>
                        <div className="card">
                            <p>Finance Director</p>
                            <img src={financeDirector} alt='finance director'/>
                            <div className="content">
                            <Link to="/FinanceDirector">
                            <button>FIND  OUT  MORE</button>
                            </Link>   
                            </div>
                        </div>
                        <div className="card">
                            <p>Outreach Coordinator</p>
                            <img src={outreachCoordinator} alt='outreach coordinator'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Marketing Specialist</p>
                            <img src={marketingSpecialist} alt='marketing specialist'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Photographer</p>
                            <img src={photographer} alt='photographer'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Legal Affairs</p>
                            <img src={legalAffairs} alt='legal affairs'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Vice-President External</p>
                            <img src={vicePresidentExternal} alt='VP external'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Academic Affairs</p>
                            <img src={academicAffairs} alt='academic affairs'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Public Relations</p>
                            <img src={publicRelations} alt='Public Relations'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Human Resources</p>
                            <img src={humanResources} alt='Human resources'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Professional Development Officer</p>
                            <img src={careerAndProfessionalDevelopment} alt='Professional Development Officer'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Sports Coordinator</p>
                            <img src={sportsCordinator} alt='Sports Coordinator'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Communication Director</p>
                            <img src={communicationDirector} alt='Communication Director'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Vice-President Internal</p>
                            <img src={vicePresidentInternal} alt='VP Internal'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Videographer</p>
                            <img src={videographer} alt='videographer'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                        <div className="card">
                            <p>Video Editor</p>
                            <img src={videoEditor} alt='video editor'/>
                            <div className="content">
                            <button>FIND  OUT  MORE</button>
                            </div>
                        </div>
                    </div>
            </div>        
        )
   
}