import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

import ErrorContext from "../store/error-context"

import {useRef, useContext} from "react"

const FoodItem = (props) => {

  const ctx = useContext(ErrorContext)

    const addQuantity = useRef()


    const handleAdd = () =>{

        if(addQuantity.current.value <= 0){
            ctx.toggleError("Please enter a value that is greater than 0")
            
            
        } else {

            const addCart = {
                id: props.id,
                name: props.name,
                price: props.price,
                amount: Number(addQuantity.current.value)
            }
            
            ctx.updateAllItems(addCart)
            document.getElementById(props.id).value = ""
        }

    }

    return(
        <>
        <br />
        <Grid container spacing={1}>

            <Grid item xs={6} lg={6} md={6} sm={6} >
                <Typography variant="h5" fontWeight="bold">
                    {props.name}
                </Typography>
                <Typography fontSize="16" fontStyle="italic">
                    {props.description}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{color: "red"}}>
                    ${props.price}
                </Typography>
            </Grid>

            <Grid item xs={6} lg={6} md={6} sm={6} container >

                <Grid item container justifyContent="right">
                    <Grid item>
                        <Typography variant="h6" fontWeight="bold">
                            Amount
                        </Typography>    
                    </Grid>
                    <Grid item>
                        <input id={props.id} type="number" style={{height: "25px", width: "35px", marginLeft: "10px"}} ref={addQuantity}/>     
                    </Grid>
                </Grid>

                <Grid item container justifyContent="right">
                    <Button variant="contained" color="primary" onClick={handleAdd}>+ Add</Button>
                </Grid>

            </Grid>

        </Grid>
        <br />
        <Divider light />
        </>
    )
}

export default FoodItem