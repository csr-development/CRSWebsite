import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function LoginComponents() {
    return (
        <div style={{display: 'flex'}}>
            <SignIn />
            <SignUp />
        </div>
    )
}
