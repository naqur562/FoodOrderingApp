import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

import {useRef} from "react"

const ModalFoodItem = (props) => {

    const addQuantity = useRef()


    const handleAdd = () =>{
        console.log("add")
    }

    const handleSubtract = () =>{
        console.log("subtract")
    }

    return(
        <>
            <Grid container spacing={1} padding= "10px">

                <Grid item xs={6} lg={6} md={6} sm={6} container justifyContent="left">

                    <Grid item container>
                        <Typography variant="h5" fontWeight="bold">
                            {props.name}
                        </Typography>

                    </Grid>

                    <Grid item container>
                        <Typography fontSize="10" fontWeight="bold" sx={{color: "red"}}>
                            ${props.price}
                        </Typography>
                    </Grid>
                    
                </Grid>

                <Grid item xs={6} lg={6} md={6} sm={6} container >

                    <Grid item container justifyContent="right">

                        <Grid item paddingTop="10px">
                            <Button size="small" variant="outlined" color="primary" onClick={handleSubtract}>-</Button>
                            <Button size="small" sx={{marginLeft: "10px"}} variant="outlined" color="primary" onClick={handleAdd}>+</Button>
                        </Grid>

                    </Grid>

                </Grid>
                
            </Grid>
            <Grid>
            </Grid>
            <Divider light width="100%"></Divider>
        </>
    )
}

export default ModalFoodItem