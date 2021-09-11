import React from 'react'
import president from '../../images/president.jpg';

export default function Accounting() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Accounting Management
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>

            <img style={{ borderRadius: "50%", height: "250px", paddingTop: "20px" }} src={president} alt=" Arman Financial Services"/>
            <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                Arman Financial Services</p>
        </div>
    )
}
