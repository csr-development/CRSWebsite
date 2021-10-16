import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/CSR_LOGO.png'
import './style.css'

export default function Header() {
    return (
        <div style={{ position: "sticky", top: "0", display: "flex" , gridTemplateColumns: "8% 92% 0%", backgroundColor: "white", width: "100%" }} className='sticky-top'>
            <div><Link to="/"className="navbar-logo"><img src={logo} alt='CSR Logo' style={{ height: "100px" }} /></Link></div>
            <div><Navbar collapseOnSelect expand="lg" style={{ paddingTop: '30px' }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="nav">
                        <Nav.Link href='/'><div style={{ color: "#111", fontSize: "14px" }}>HOME</div></Nav.Link>
                        <Nav.Link href='/about'><div style={{ color: "#111", fontSize: "14px" }}>ABOUT US</div></Nav.Link>
                        <Nav.Link href='/contact'><div style={{ color: "#111", fontSize: "14px" }}>CONTACT US</div></Nav.Link>
                        <Nav.Link href='/application'><div style={{ color: "#111", fontSize: "14px" }}>APPLICATION</div></Nav.Link>
                        <Nav.Link href='/event'><div style={{ color: "#111", fontSize: "14px" }}>EVENT</div></Nav.Link>
                        <Nav.Link href='/adopt'><div style={{ color: "#111", fontSize: "14px" }}>ADOPT A STUDENT</div></Nav.Link>
                        <Nav.Link href='/partners'><div style={{ color: "#111", fontSize: "14px" }}>PARTNERS</div></Nav.Link>
                        <Nav.Link href='/internships'><div style={{ color: "#111", fontSize: "14px" }}>INTERNSHIPS</div></Nav.Link>
                        <Nav.Link href='/blogs'><div style={{ color: "#111", fontSize: "14px" }}>BLOGS</div></Nav.Link>
                        <Nav.Link href='/branches'><div style={{ color: "#111", fontSize: "14px" }}>BRANCHES</div></Nav.Link>
                        <Nav.Link href='/academic'><div style={{ color: "#111", fontSize: "14px" }}>ACADEMIC</div></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar></div>
        </div>
    );
}