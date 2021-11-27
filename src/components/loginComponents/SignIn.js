import React, {useState} from 'react'
import { Input, Container } from '@material-ui/core';
import { Button } from 'react-bootstrap'

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
             <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Container>
        <form style={{display: 'grid', justifyContent: 'center', marginTop: '1rem'}}>
          <Input
            name='email'
            type='email'
            handleChange={()=>console.log('changed')}
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
            handleChange={()=>console.log('changed')}
            label='password'
            required
          />
          <div className='buttons' style={{gap: '2rem', marginTop: '2rem'}}>
            <Button style={{backgroundColor: 'black', borderColor: 'black'}} type='submit'> Sign in </Button>
            <Button onClick={(ev)=>{
                ev.preventDefault();
                console.log('clicked')}} >
              Sign in with Google
            </Button>
          </div>
        </form>
        </Container>
      </div>
        </div>
    )
}
