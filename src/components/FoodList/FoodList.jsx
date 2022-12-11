import FoodContainer from "../UI/FoodContainer"
import FoodItem from "./FoodItem"
import foodMenu from "./foodMenu"

const FoodList = (props) => {
    return (
        <FoodContainer sx={{color: "white"}}>
            {foodMenu.map(x => {
                return <FoodItem 
                    key = {x.id}
                    id = {x.id}
                    name = {x.name}
                    description = {x.description}
                    price= {x.price}
                />
            })}

        </FoodContainer>
    )
}

export default FoodList