import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import LoginComponents from './loginComponents/LoginComponents';
import MembersArea from './loginComponents/MembersArea';
import { Container } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Members() {

    //check auth
    const [isSignedIn, setIsSignedIn] = useState(false);

    const auth = getAuth();

    function checkAuth(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(uid);
              return setIsSignedIn(true);
              // ...
            } else {
              // User is signed out
              // ...
              console.log('signed out')
            }
          });
    }

    useEffect(()=>{
        checkAuth();
    }, [])


    return (
        <div>
            <Header />
            <Container>
            <h1>Members Area</h1>
            <div style={{display: 'flex', minHeight: '76vh', paddingTop: '2rem'}}>
            {
                isSignedIn ? <MembersArea /> : <LoginComponents />

            }
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
