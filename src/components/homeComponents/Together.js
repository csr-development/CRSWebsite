import React from 'react'
import people from '../../images/people.jpg';
import { Button } from 'react-bootstrap';

export default function Together() {
    return (
        <div style={{
            background: `url(${people}) center no-repeat fixed`,
            backgroundSize: "cover",
            width: '100vw',
        }}>
            <h1 style={{ textAlign: "center", fontSize: "70px", paddingTop: "150px" }}>Together, we can.</h1>
            <h4 style={{ textAlign: "center" }}>By the students, for the students.</h4>
            <div style={{ textAlign: "center", paddingBottom: "100px" }}><Button variant="danger">JOIN US</Button></div>
        </div >
    )
}
