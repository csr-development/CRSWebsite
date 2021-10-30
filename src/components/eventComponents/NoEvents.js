import { Container } from "@material-ui/core"

export default function NoEvents(){
    return (
        <Container style={{minHeight: "82vh"}}>
        <h1>No events available now.</h1>
        <h4 style={{paddingTop: "2rem"}}>Please check this page later.</h4>
        </Container>
    )
}