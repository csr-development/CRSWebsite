import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../firebase/firebase.utils'

export default function MembersArea({name}) {
    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'center', gap: '.5rem', marginBottom: '1rem'}}>
            <h4>Welcome to our Membership Page</h4>
            <h4 style={{fontWeight: 'bold'}}>{name}</h4>
            <h4>!</h4>
            </div>
            <p>Here you can find exclusive perks and events!</p>

            <span style={{marginTop: '10rem'}}>
                <NavLink exact to='/'>
                <Button onClick={logOut}>Sign out</Button>
                </NavLink>
            </span>
        </Container>
    )
}
