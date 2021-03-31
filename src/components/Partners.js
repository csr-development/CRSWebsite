import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react';
import Friends from './partnerComponents/Friends';
import Partner from './partnerComponents/Partners';


export default function Partners() {
    return (
        <div>
            <Header />
            <Partner />
            <Friends />
            <Footer />
        </div>
    )
}


