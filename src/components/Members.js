import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import LoginComponents from './loginComponents/LoginComponents';
import MembersArea from './loginComponents/MembersArea';
import { Container } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import spinner from '../images/Spinner-1s-200px.gif';

export default function Members() {

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState('');

    function getCurrentUser(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setCurrentUser(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
    };

    useEffect(()=>{
        getCurrentUser();
    }, [currentUser])

    return (
        <div>
            <Header />
            <Container>
            <h1>Members Area</h1>
            <div style={{display: 'flex', minHeight: '76vh', paddingTop: '2rem'}}>
            {
                user ? <MembersArea name={currentUser.displayName}/> : <LoginComponents />

            }
            </div>
            </Container>
            {loading && <div className='loading flex flex-col'>
       <img src={spinner} alt='loading'/>
            <h2 className="font-bold text-3xl">Please wait...</h2>
     </div>}
            <Footer />
        </div>
    )
}