import Header from './layout/Header';
import Footer from './layout/Footer';
import React from 'react'
import CoverLetter from './eventComponents/CoverLetter';
import Resume from './eventComponents/Resume';
import Donate from './eventComponents/Donate';
import Yoga from './eventComponents/Yoga';
import Warzone from './eventComponents/Warzone';
import FIFA from './eventComponents/FIFA';
import Conference from './eventComponents/Conference';
import Development from './eventComponents/Development';
import NoEvents from './eventComponents/NoEvents';

/**
 * To activate the event remove the /* and update the component.
 * @returns 
 */

export default function Event() {
    return (
        <div>
            <Header />
            {/* <NoEvents /> */}
            <CoverLetter />
            <Resume />
            <Donate />
            <Yoga />
            <Warzone />
            <FIFA />
            <Conference />
            <Development />
            <Footer />
        </div>
    )
}