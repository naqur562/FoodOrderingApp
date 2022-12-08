import Container from "@mui/material/Container"

const FoodContainer = (props) => {
    return(
        <Container sx={{backgroundColor: "white", marginTop: "100px", borderRadius:"15px", padding: "20px"}}>
            {props.children}
        </Container>
    )
}
export default FoodContainer