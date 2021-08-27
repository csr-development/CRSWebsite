import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from "@material-ui/icons/Send"
import { TextField, Box } from "@material-ui/core"

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "black",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    }
})(TextField)

export default function Touch() {
    const [email, setEmail] = useState("");
    return (
        <div style={{ textAlign: "center", padding: "30px" }}>
            <h1 style={{ fontSize: "45px", fontWeight: "bold", padding: "30px" }}>
                Stay in Touch</h1>
            <p>Sign up to hear from us about our events</p>
            <div style={{ textAlign: "center" }}>
                <Box component="form">
                    <Container>
                        <Row>
                            <Col xs={12} md={9} lg={9}>
                                <InputField fullWidth={true} label="Email Address" variant="outlined" name="message"
                                    value={email} onChange={(e) => setEmail(e.target.value)} size="small" />
                            </Col>
                            <Col xs={12} md={3} lg={3}>
                                <Button style={{ backgroundColor: "#a00" }} type="submit">
                                    SIGN UP
                        </Button>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </div>

        </div>
    )
}
