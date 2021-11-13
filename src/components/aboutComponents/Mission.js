import React from 'react';
import missionImg from '../../images/aboutMain.jpg';
import '../CSS/mission.css';

export default function Mission() {
    return (
        <div style={{ backgroundColor: "#eee", textAlign: "center" }}>
            <div style={{backgroundImage: `url(${missionImg})`, minHeight: "18vh"}}>
            <p style={{ color: "#FFF", fontSize: "50px", fontWeight: "bold", padding: "2.5rem" }}>
                Our Mission
            </p>
            </div>
            <div id="mission-div" container spacing={4}>
            <div style={{maxWidth:"30vw"}}>
            <p style={{ fontSize: "20px", padding: "30px", fontWeight:"bold"}}>
                Students
            </p>
            <p style={{ fontSize: "18px", color: "#666", margin: "auto", paddingBottom: "20px" }}>
                We do our best to support students across Canada for their basic needs.
                Whether it's education tuitions, grants, scholarships, education supplies,
            transportation or assistance with their groceries and meal, we are here for you.</p>
            </div>
            <div style={{maxWidth:"30vw"}}>
            <p style={{ fontSize: "20px", padding: "30px",fontWeight:"bold" }}>
                Student Associations
            </p>
            <p style={{ fontSize: "18px", color: "#666", margin: "auto", paddingBottom: "20px" }}>
                We support more than thousands of student associations across Canada. Student
                associations are making remarkable positive change in our society by hosting
            events, workshops and more. We are here to support you throughout you journey.</p>
            </div>
            <div style={{maxWidth:"30vw"}}>
            <p style={{ fontSize: "20px", padding: "30px",fontWeight:"bold"}}>
                Community
            </p>
            <p style={{ fontSize: "18px", color: "#666", margin: "auto", paddingBottom: "20px" }}>
                We take pride in giving back to the community. We work hard to ensure our
             tomorrow is brighter than today.</p>
             </div>
             </div>
        </div>
    )
}
