import React, { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SignIn from './loginComponents/SignIn';
import SignUp from './loginComponents/SignUp';
import FirebaseLogin from './loginComponents/FirebaseLogin';
import { Container } from 'react-bootstrap';

export default function Members() {


    return (
        <div>
            <Header />
            <Container>
            <h1>Members Area</h1>
            <div style={{display: 'flex', minHeight: '76vh', paddingTop: '2rem'}}>
            <SignIn />
            <SignUp />
            {/* <FirebaseLogin /> */}
            </div>
            </Container>
            <Footer />
        </div>
    )
}

// const CustomButton = ({children, isGoogleSignIn, ...otherProps})=>(
//     <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//         {children}
//     </button>
// )
