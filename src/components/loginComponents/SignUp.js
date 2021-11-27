import { Container, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { createUser } from '../../firebase/firebase.utils';

export default function SignUp() {
    // const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');


    function handleSubmit(ev){
        ev.preventDefault();
        console.log('submitted');
        if(email && name && password === confirmPassword) {
            createUser(email, password, name)
        }
    }

    

    

    function handleChange(ev){
        ev.preventDefault();
       let input =  ev.target.name;
       let value = ev.target.value;
       switch(input) {
           case 'displayName': 
           return setName(value);
           case 'email':
               return setEmail(value);
               case 'password':
                   return setPassword(value);
              case 'confirmPassword':
                   return setConfirmPassword(value);
                default:
                return;
       }
    }

    return (
        <Container className='sign-up' style={{maxWidth: '30vw'}}>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit} style={{display: 'grid', justifyContent: 'center'}}>
        <Input type='text' name='displayName' value={name} onChange={handleChange} label='Display Name' placeholder='Name' required></Input>
        <Input type='email' name='email' value={email} onChange={handleChange} label='Email' placeholder='Email' required></Input>
        <Input type='password' name='password' value={password} onChange={handleChange} label='Password' required placeholder='Password'></Input>
        <Input type='password' name='confirmPassword' placeholder='Confirm Password' value={confirmPassword} onChange={handleChange} label='Confirm Password' required></Input>
        <div style={{maxWidth: '10vw', marginTop: '2rem'}}>
        <Button type='submit'>SIGN UP</Button>
        </div>
        </form>
    </Container>
    )
}
