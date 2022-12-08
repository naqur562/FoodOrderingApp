import { Button, Grid } from "@mui/material"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/system"
import ModalFoodItem from "./ModalFoodItem"

const CartModal = (props) => {
    return(
        <Modal open={props.isClicked}> 

        <Box sx = {{position: "absolute", backgroundColor: "white", textAlign:"center", top:"20%", left: "20%", width: "60%", padding: "20px", borderRadius: "15px"}}>

            <Grid container>
                {props.allItems.map(x => {
                    return <ModalFoodItem 
                        key = {x.id}
                        name = {x.name}
                        price= {x.price}
                    />
                })}
            </Grid>


            <Grid container justifyContent={"right"} paddingTop="10px">
                <Button style={{margin: "5px"}} onClick={props.toggleCart} variant= "contained" >Close</Button>
                <Button style={{margin: "5px"}} onClick={props.toggleCart} variant= "outlined" >Order</Button>
            </Grid>
        </Box>

        </Modal>
    )
}

export default CartModal