import React from 'react'
import hand from '../../images/helping-hand.jpg';
import { Button } from 'react-bootstrap';

export default function Adopt() {
    return (
        <div style={{
            background: `url(${hand}) center no-repeat`,
            backgroundSize: "cover",
            color: "white",
        }}>
            <h1 style={{ textAlign: "center", fontSize: "45px", paddingTop: "75px" }}>ADOPT A STUDENT CAMPAIGN</h1>
            <div style={{ textAlign: "center", paddingBottom: "50px" }}><Button variant="danger">LEARN MORE</Button></div>
        </div>
    )
}
