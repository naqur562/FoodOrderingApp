import "./Header.css"
import AppBar from "@mui/material/AppBar"
import ToolBar from "@mui/material/ToolBar"
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import ShoppingCart from "@mui/icons-material/ShoppingCart"

const Header = (props) => {

    return(
        <AppBar className="nav" position="static">
            <ToolBar className="nav-contents">
                <Typography variant="h4" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
                    ReactMeals
                </Typography>
                <Button 
                    sm = {12}
                    className="cart-button" 
                    variant="contained" 
                    color="primary" 
                    style={{textTransform: "none", backgroundColor: "rgb(0, 67, 140", padding: "15px 50px 15px 50px", borderRadius: "25px"}}>
                        <ShoppingCart />
                        <Typography className="your-cart" variant="h6">
                            Your Cart
                        </Typography>
                        <Typography className="cart-total" variant="h6">
                            0
                        </Typography>
                </Button>
            </ToolBar>
        </AppBar>
    )
}

export default Header