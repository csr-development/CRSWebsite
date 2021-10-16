import Header from './layout/Header';
import Footer from './layout/Footer';
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

    /**
     * Pending:
     * 2 - Navbar sticky property not working
     */
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
