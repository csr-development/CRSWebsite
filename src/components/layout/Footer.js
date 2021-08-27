import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIN from '@material-ui/icons/LinkedIn'
import Ins from '@material-ui/icons/Instagram'
import { Button, Container, Row, Col } from 'react-bootstrap';

const useStyle = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const clickLinkedIn = () => {
        window.open('https://www.linkedin.com/company/canadian-student-relief-charity/')
    }
    const clickIns = () => {
        window.open('https://www.instagram.com/csrcharity/')
    }
    const clickTwitter = () => {
        window.open('https://twitter.com/CsrCharity')
    }
    const clickFacebook = () => {
        window.open('https://www.facebook.com/csrcharity/')
    }
    const classes = useStyle()
    return (

        // <BottomNavigation style={{ position: "relative", margin: "20px" }}>
        //     <div style={{ width: "100vw", background: "#000", padding: "10px" }}>
        //         <Row>
        //             <Col xs={12} md={6} lg={6}>
        //                 <div style={{ textAlign: "center", color: "#bbb", fontSize: "13px" }}>
        //                     Copyright &#169; 2021 Csrcharity - All Rights Reserved.</div>
        //             </Col>
        //             <Col xs={12} md={6} lg={6}>
        //                 <div style={{ textAlign: "center" }}>
        //                     <BottomNavigationAction className={classes.root} onClick={clickFacebook} style={{ padding: 0 }} icon={<Facebook />} />
        //                     <BottomNavigationAction className={classes.root} onClick={clickTwitter} style={{ padding: 0 }} icon={<Twitter />} />
        //                     <BottomNavigationAction className={classes.root} onClick={clickIns} style={{ padding: 0 }} icon={<Ins />} />
        //                     <BottomNavigationAction className={classes.root} onClick={clickLinkedIn} style={{ padding: 0 }} icon={<LinkedIN />} />
        //                 </div>
        //             </Col>
        //         </Row>
        //     </div>
        // </BottomNavigation >
        <div>
            test
        </div>
    )
}

export default Footer