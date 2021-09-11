import React from 'react'
import president from '../../images/president.jpg';

export default function Outreach() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Outreach
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>

            <img style={{ borderRadius: "50%", height: "250px", paddingTop: "20px" }} src={president} alt="Anita Taksokhan"/>
            <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                Anita Taksokhan
            </p>
            <p style={{ fontSize: "18px", color: "#666", paddingBottom: "30px" }}>
                Team Lead</p>
        </div>
    )
}
