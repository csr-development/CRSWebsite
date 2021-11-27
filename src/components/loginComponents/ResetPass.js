import { Input } from '@material-ui/core';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { resetPassword } from '../../firebase/firebase.utils';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function ResetPass() {
    const [email, setEmail] = useState('');

    function handleEmail(ev){
        ev.preventDefault();
        setEmail(ev.target.value)
    }

    function handleSubmit(ev){
        ev.preventDefault();
        if (email){
            resetPassword(email);
        }
    }
    return (
        <div>
             <Header />
            <h3>Please enter your email below to reset your password</h3>
            <div style={{minHeight: '75vh'}}>
            <form style={{display: 'grid', justifyContent: 'center', marginTop: '2rem'}} onSubmit={handleSubmit}>
          <Input
            name='email'
            type='email'
            onChange={handleEmail}
            value={email}
            placeholder='Email'
            label='email'
            required
          />
          <NavLink to='/members'>
                  <Button style={{backgroundColor: 'black', borderColor: 'black', marginTop: '2rem'}} type='submit'> Reset Password </Button>
                  </NavLink>
          </form>
          </div>
          <Footer/>
        </div>
    )
}
