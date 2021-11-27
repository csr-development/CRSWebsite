import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Container } from 'react-bootstrap';

export default function LoginComponents() {
    return (
        <div style={{display: 'flex'}}>
            <SignIn />
            <SignUp />
        </div>
    )
}
