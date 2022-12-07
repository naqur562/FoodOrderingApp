import Container from "@mui/material/Container"

const FoodContainer = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}
export default FoodContainer