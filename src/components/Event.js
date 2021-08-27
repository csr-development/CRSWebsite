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

export default function Event() {
    return (
        <div>
            <Header />
            <CoverLetter />
            <Resume />
            <Donate />
            <Yoga />
            <Warzone />
            <FIFA />
            <Conference />
            <Development />
        </div>
    )
}