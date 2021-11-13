import React from 'react'
import { Button } from 'react-bootstrap';
import './adopt.css';

export default function Adopt() {
    return (
        <div className='adopt'>
            <div className='adopt-text'>
            <h1 id='adopt-text' style={{ textAlign: "center", fontSize: "45px", paddingTop: "75px" }}>ADOPT A STUDENT CAMPAIGN</h1>
            <div style={{ textAlign: "center", paddingBottom: "50px" }}><Button variant="danger">LEARN MORE</Button></div>
            </div>
        </div>
    )
}
