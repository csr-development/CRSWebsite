import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react';
import WhyShouldYouJoinUs from './internshipComponents/WhyShouldYouJoinUs';
import AvailablePositions from './internshipComponents/AvailablePositions';


export default function Internships() {
    return (
        <div style={{overflow:"hidden", margin:"25px"}}>
            <Header />
                
                <WhyShouldYouJoinUs />
                <AvailablePositions />
            <Footer />
        </div>
    )
}