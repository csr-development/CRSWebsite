import React from 'react'
import president from '../../images/president.jpg';

export default function Legal() {
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{ color: "#a00", fontSize: "50px", fontWeight: "bold", padding: "30px" }}>
                Legal Affairs
            </p>
            <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>

            <img style={{ borderRadius: "50%", height: "250px", padding: "20px" }} src={president} />
        </div>
    )
}
