import "./App.css"
import Header from "./components/Header/Header"
import FoodList from "./components/FoodList/FoodList"
import {useState} from "react"
import CartModal from "./components/Modals/CartModal"
import ModalError from "./components/Modals/ModalError"

function App() {

  const [isClicked, setIsClicked] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [cartTotal, setCartTotal] = useState(0)
  const [allItems, setAllItems] = useState([])


  const updateAllItems = (newItem) => {

    setAllItems(prevValue => {
      return(
        [
          ...prevValue,
          newItem
        ]
      )
    })
  }



  const toggleCart = () => {
    setIsClicked(!isClicked)
  }

  const toggleError = (message) => {
    setIsError(!isError)
  }
  
  return (
    <>
      <CartModal
        isClicked = {isClicked}
        allItems = {allItems}
        toggleCart = {toggleCart}
      />

      <ModalError 
        isError = {isError}
        toggleError = {toggleError}
      />

      <Header
        cartTotal = {cartTotal}
        toggleCart = {toggleCart}
      />

      <FoodList 
        updateAllItems = {updateAllItems}
        toggleError = {toggleError}
      />

    </>

  );
}

export default App;
