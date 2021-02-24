import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIN from '@material-ui/icons/LinkedIn'
import Ins from '@material-ui/icons/Instagram'
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles({
    f: {
        "& .MuiSvgIcon-root": {
            fill: "rgb(24, 119, 242)",
            "&:hover": {
                fill: "rgb(24, 119, 142)",
            }
        }
    },
    t: {
        "& .MuiSvgIcon-root": {
            fill: "rgb(29, 161, 242)",
            "&:hover": {
                fill: "rgb(29, 161, 142)",
            }
        }
    },
    i: {
        "& .MuiSvgIcon-root": {
            fill: "rgb(225, 48, 108)",
            "&:hover": {
                fill: "rgb(225, 48, 8)",
            }
        }
    },
    l: {
        "& .MuiSvgIcon-root": {
            fill: "rgb(40, 103, 178)",
            "&:hover": {
                fill: "rgb(40, 103, 78)",
            }
        }
    }
})

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

export default function Connect() {
    const classes = useStyle()
    return (
        <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#eee" }}>
            <p style={{ color: "#a00", fontWeight: "bold", fontSize: "40px" }}>
                Connect With Us
            </p>
            <div style={{ border: "1px solid #ccc", width: "50px", margin: "auto" }}></div>
            <BottomNavigationAction className={classes.f} onClick={clickFacebook} icon={<Facebook style={{ fontSize: "50px" }} />} />
            <BottomNavigationAction className={classes.t} onClick={clickTwitter} icon={<Twitter style={{ fontSize: "50px" }} />} />
            <BottomNavigationAction className={classes.i} onClick={clickIns} icon={<Ins style={{ fontSize: "50px" }} />} />
            <BottomNavigationAction className={classes.l} onClick={clickLinkedIn} icon={<LinkedIN style={{ fontSize: "50px" }} />} />
        </div>
    )
}
