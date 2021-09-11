import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react';
import aboutMain from '../images/aboutMain.jpg';
import Mission from './aboutComponents/Mission';
import Team from './aboutComponents/Team';
import Design from './aboutComponents/Design';
import Design2 from './aboutComponents/Design2';
import Design3 from './aboutComponents/Design3';
import Outreach from './aboutComponents/Outreach';
import Outreach2 from './aboutComponents/Outreach2';
import Marketing from './aboutComponents/Marketing';
import Academic from './aboutComponents/Academic';
import Project from './aboutComponents/Project';
import Communications from './aboutComponents/Communicarions';
import Finances from './aboutComponents/Finances';
import HR from './aboutComponents/HR';
import Writing from './aboutComponents/Writing';
import Corporate from './aboutComponents/Corporate';
// import Legal from './aboutComponents/Legal';
import Accounting from './aboutComponents/Accounting';
import Advisors from './aboutComponents/Advisors';
import History from './aboutComponents/History';

export default function About() {
    return (
        <div>
            <Header />
            <div style={{ position: "relative", padding: "60px" }}>
                <img src={aboutMain} style={{ maxWidth: "80vw", position: "relative" }} alt='Typing' />
            </div>
            <Mission />
            <Team />
            <Design />
            <Design2 />
            <Design3 />
            <Outreach />
            <Outreach2 />
            <Marketing />
            <Academic />
            <Project />
            <Communications />
            <Finances />
            <Writing />
            <HR />
            <Corporate />
            {/* <Legal /> - no person in this component, removed it temporary*/}
            <Accounting />
            <Advisors />
            <History />
            <Footer />
        </div>
    )
}