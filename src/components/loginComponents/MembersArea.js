import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../firebase/firebase.utils'

export default function MembersArea() {
    return (
        <Container>
            <h2>Welcome to our Membership Page!</h2>
            <p>Here you can find exclusive perks and events!</p>

            <span style={{marginTop: '10rem'}}>
                <NavLink exact to='/'>
                <Button onClick={logOut}>Sign out</Button>
                </NavLink>
            </span>
        </Container>
    )
}
