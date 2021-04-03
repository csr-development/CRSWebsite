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

import "../CSS/AvailablePosition.css";

export default function AvailablePositions(){
    return(
        <div style={{ textAlign: "center", margin:"30px"}}>
                <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "30px" }}>
                Available Positions
                </p>
                <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
                <div id="AvailablePositions">
                    <div className="card">
                        <p>Website Designer</p>
                        <img src={websiteDesigner}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Grant Writer</p>
                        <img src={grantWriter}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Digital Marketing Officer</p>
                        <img src={digitalMarketingOfficer}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Finance Director</p>
                        <img src={financeDirector}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Outreach Coordinator</p>
                        <img src={outreachCoordinator}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Marketing Specialist</p>
                        <img src={marketingSpecialist}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Photographer</p>
                        <img src={photographer}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Legal Affairs</p>
                        <img src={legalAffairs}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Vice-President External</p>
                        <img src={vicePresidentExternal}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Academic Affairs</p>
                        <img src={academicAffairs}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Public Relations</p>
                        <img src={publicRelations}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Human Resources</p>
                        <img src={humanResources}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Professional Development Officer</p>
                        <img src={careerAndProfessionalDevelopment}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Sports Coordinator</p>
                        <img src={sportsCordinator}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Communication Director</p>
                        <img src={communicationDirector}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Vice-President Internal</p>
                        <img src={vicePresidentInternal}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Videographer</p>
                        <img src={videographer}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p>Video Editor</p>
                        <img src={videoEditor}/>
                        <div className="content">
                        <Button>FIND  OUT  MORE</Button>
                        </div>
                    </div>
                </div>
        </div>        
    )
}