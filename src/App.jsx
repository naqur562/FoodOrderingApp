import "./App.css"
import Header from "./components/Header/Header"
import FoodList from "./components/FoodList/FoodList"
import {useEffect, useState} from "react"
import CartModal from "./components/Modals/CartModal"
import ModalError from "./components/Modals/ModalError"
import ErrorContext from "./components/store/error-context"

function App() {

  const [isClicked, setIsClicked] = useState(false)
  const [isError, setIsError] = useState(false)

  const [cartTotal, setCartTotal] = useState(0)
  const [allItems, setAllItems] = useState([])

  const [errorMessage, setErrorMessage] = useState("")

  const updateAllItems = (newItem) => {

    setAllItems(prevValue => {
      const found = prevValue.find(e => e.id == newItem.id)

      if (found){
        const newArray = prevValue.map(x => {
          if(x.id == found.id){
            return(
              {...x, amount: Number(x.amount) + Number(newItem.amount)}
            )
          }
          return x
        })
        return newArray
      } else {
        return(
          [
            ...prevValue,
            newItem
          ]
        )
      }
    })
  }

  useEffect(() => {
    const total = allItems.reduce((x, y) => {return x + y.amount}, 0)
    setCartTotal(total)
  }, [allItems])

  const toggleCart = () => {
      setIsClicked(!isClicked)
  }

  const toggleError = () => {
    setIsError(!isError)
  }
  
  return (
    <ErrorContext.Provider
      value={{
        isError: isError,
        toggleError: toggleError,
        updateAllItems: updateAllItems
      }}
    >

      <CartModal
        isClicked = {isClicked}
        allItems = {allItems}
        toggleCart = {toggleCart}
      />

      <ModalError message = {errorMessage}/>

      <Header
        cartTotal = {cartTotal}
        toggleCart = {toggleCart}
      />

      <FoodList />

    </ErrorContext.Provider>

  );
}

export default App;
