import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react';
import Needed from './adoptComponents/Needed';
import Donate from './adoptComponents/Donate';
import Impact from './adoptComponents/Impact';
import Platinum from './adoptComponents/Platinum';
import Gold from './adoptComponents/Gold';
import './CSS/adopt.css';

export default function Adopt() {
    return (
        <div>
            <Header />
            <div className='adopt-page'>
                <p className='adopt-page-text' style={{ margin: 'auto', fontSize: '50px', fontWeight: 'bold' }}>ADOPT A STUDENT CAMPAIGN</p>
            </div>
            <div style={{ backgroundColor: 'rgb(172, 35, 41)', alignItems: 'center', paddingBottom: '30px' }}>
                <p style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold' }}>STUDENTS NEED YOUR HELP</p>
                <p style={{ color: '#fff', maxWidth: '700px', margin: '20px auto 20px auto', fontSize: '20px' }}>The COVID-19 pandemic has left many students facing mounting financial
                pressures and difficulties in providing for their everyday essentials. Through the Adopt a Student program,
                     you can help support them to meet their most basic needs and ultimately obtain their education.</p>
            </div>
            <Needed />
            <div style={{ backgroundColor: 'rgb(172, 35, 41)', alignItems: 'center', paddingBottom: '80px', paddingTop: '50px' }}>
                <p style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold' }}>HOW CAN YOU HELP?</p>
                <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
            </div>
            <Donate />
            <Impact />
            <Platinum />
            <Gold />
            <Footer />
        </div>
    )
}