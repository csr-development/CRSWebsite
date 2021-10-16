import React from 'react'
import { Button } from 'react-bootstrap';
import "./together.css";


export default function Together() {
    return (
        <div className='together'>
            <div className='together-text'>
            <h1 style={{ textAlign: "center", fontSize: "70px", paddingTop: "150px" }}>Together, we can.</h1>
            <h4 style={{ textAlign: "center" }}>By the students, for the students.</h4>
            <div style={{ textAlign: "center", paddingBottom: "100px" }}><Button variant="danger">JOIN US</Button></div>
            </div>
        </div >
    )
}
