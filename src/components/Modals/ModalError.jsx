import Modal from "@mui/material/Modal"
import { Grid, Typography, Box, Button } from "@mui/material"


const ModalError = (props) => {

    return(
        <>
            <Modal open = {props.isError}>
                <Box sx = {{position: "absolute", backgroundColor: "white", textAlign:"center", top:"20%", left: "20%", width: "60%", padding: "20px", borderRadius: "15px"}}>
                    <Grid container spacing={1} padding= "10px" justifyContent="center">
                        <Typography variant="h6" fontWeight="bold">
                            ERROR <br/> Please enter a valid amount to add to your cart.
                        </Typography>
                    </Grid>
                    <Button variant="contained" onClick={props.toggleError}>Go Back</Button>
                </Box>
            </Modal>

            {props.errorMessage}
        </>
    )
}

export default ModalError