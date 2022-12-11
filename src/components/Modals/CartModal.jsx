import { Button, Grid, Typography } from "@mui/material"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/system"
import ModalFoodItem from "./ModalFoodItem"
import foodMenu from "../FoodList/foodMenu"

const CartModal = (props) => {

    const cartTotalArray = props.allItems.map(x => {
      const itemTotal = x.amount * x.price
      return itemTotal
    })

    const cartTotal = cartTotalArray.reduce((x, y) => {return x + y}, 0)

    return(
        <Modal open={props.isClicked}> 

        <Box sx = {{position: "absolute", backgroundColor: "white", textAlign:"center", top:"20%", left: "20%", width: "60%", padding: "20px", borderRadius: "15px"}}>

            <Grid container>
                {props.allItems.map(x => {
                    return <ModalFoodItem 
                        key = {x.id}
                        id = {x.id}
                        name = {x.name}
                        price= {x.price}
                        amount= {x.amount}
                    />
                })}
              <Grid container spacing={1} padding= "10px">
                  <Grid item xs={6} lg={6} md={6} sm={6} container justifyContent="left" >
                      <Typography variant="h5" fontWeight="bold">
                          Total Amount:
                      </Typography>
                  </Grid>

                  <Grid item xs={6} lg={6} md={6} sm={6} container justifyContent="right" >
                      <Typography variant="h5" fontWeight="bold">
                          {cartTotal.toFixed(2)}
                      </Typography>
                  </Grid>

              </Grid>
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