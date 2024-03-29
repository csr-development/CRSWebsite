import React, {useState} from 'react'
import { Input, Container } from '@material-ui/core';
import { Button } from 'react-bootstrap'
import { logInUser } from '../../firebase/firebase.utils';
import { NavLink } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(ev){
        ev.preventDefault();
        setEmail(ev.target.value)
    }
    function handlePass(ev){
        ev.preventDefault();
        setPassword(ev.target.value)
    }
    function handleSubmit(ev){
        ev.preventDefault();
        if (email || password){
            logInUser(email, password)
        }
    }

    return (
        <div>
             <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Container>
        <form style={{display: 'grid', justifyContent: 'center', marginTop: '1rem'}} onSubmit={handleSubmit}>
          <Input
            name='email'
            type='email'
            onChange={handleEmail}
            value={email}
            placeholder='Email'
            label='email'
            required
          />
          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePass}
            label='password'
            required
          />
          <div className='buttons' style={{gap: '2rem', marginTop: '2rem'}}>
            <Button style={{backgroundColor: 'black', borderColor: 'black'}} type='submit'> Sign in </Button>
            <NavLink to='/forgot'>
            <Button >
              Forgot Password
            </Button>
            </NavLink>
          </div>
        </form>
        </Container>
      </div>
        </div>
    )
}
