import Modal from "@mui/material/Modal"
import { Grid, Typography, Box, Button } from "@mui/material"
import { useContext } from "react"

import ErrorContext from  "../store/error-context"


const ModalError = (props) => {

  const ctx = useContext(ErrorContext)

  return(
      <>
          <Modal open = {ctx.isError}>
              <Box sx = {{position: "absolute", backgroundColor: "white", textAlign:"center", top:"20%", left: "20%", width: "60%", padding: "20px", borderRadius: "15px"}}>
                  <Grid container spacing={1} padding= "10px" justifyContent="center">
                      <Typography variant="h6" fontWeight="bold">
                          ERROR <br/> {props.message}
                      </Typography>
                  </Grid>
                  <Button variant="contained" onClick={ctx.toggleError}>Go Back</Button>
              </Box>
          </Modal>

          {props.errorMessage}
      </>
  )
}

export default ModalError