import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Together from './homeComponents/Together';
import Adopt from './homeComponents/Adopt';
import About from './homeComponents/About';
import Donate from './homeComponents/Donate';
import Ins from './homeComponents/Ins';
import Touch from './homeComponents/Touch';
import Connect from './homeComponents/Connect';
import Blogs from './homeComponents/Blogs';

export default function Home() {
    return (
        <div style={{ position: "relative" }}>
            <Header />
            <Together />
            <Adopt />
            <Donate />
            <About />
            <Ins />
            <Touch />
            <Connect />
            <Blogs />
            <Footer />
        </div >
    )
}
