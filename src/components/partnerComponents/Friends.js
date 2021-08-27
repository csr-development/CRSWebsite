import React from 'react'
import i1 from '../../images/partners/York.jpg';
import i2 from '../../images/partners/student.jpg';
import './slider.css';

export default function Friends() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#eee" }}>
            <h1 style={{ color: "#a00", padding: "30px" }}>
                Our Friends</h1>
            <div className="slider" style={{ width: "70%" }}>
                <div className="slide-track">
                    <div className="slide">
                        <img src={i1} />
                    </div>
                    <div className="slide">
                        <img src={i2} />
                    </div>
                    <div className="slide">
                        <img src={i1} />
                    </div>
                    <div className="slide">
                        <img src={i2} />
                    </div>
                    <div className="slide">
                        <img src={i1} />
                    </div>
                    <div className="slide">
                        <img src={i2} />
                    </div>
                    <div className="slide">
                        <img src={i1} />
                    </div>
                    <div className="slide">
                        <img src={i2} />
                    </div>
                    <div className="slide">
                        <img src={i1} />
                    </div>
                    <div className="slide">
                        <img src={i2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
