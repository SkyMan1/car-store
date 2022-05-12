import {updateCar} from "./updateCar" 
import {updateCart} from "./updateCart" 

const initialState = {
    cars: {
        carsList: [],
        loading: true,
        error: null
    },
    cart: {
        cartList: [],
        orderTotal: null
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.type);

    return {
        cars: updateCar(state, action),
        cart: updateCart(state, action)
    }


}

export default reducer;