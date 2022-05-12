import { act } from "react-dom/test-utils";

const initialState = {
    carList: [],
    cart: [],
    loading: true,
    error: null,
    carts: [],
    orderTotal: null
}

const updateCartItem = (car, carItem = {}, quont) => {
    const {
        id = car.id,
        brand = car.brand,
        model = car.model,
        year = car.year,
        price = car.price,
        count = 0,
        total = 0
    } = carItem;

    return {
        id,
        brand,
        model,
        year,
        price,
        count: count + 1 * quont,
        total: total + car.price * quont
    }
}

const updateCartItems = (state, newItem, carIdx) => {
    if (carIdx === -1) {
        return [
            ...state.carts,
            newItem
        ]
    }

    if (newItem.count === 0) {
        return [
            ...state.carts.slice(0, carIdx),
            ...state.carts.slice(carIdx + 1)
        ]
    }

    return [
        ...state.carts.slice(0, carIdx),
        newItem,
        ...state.carts.slice(carIdx + 1)
    ]

}

const updateOrderTotal = (state, newItem) => {
    console.log(state.carts);
}

const updateShopCart = (state, carId, quont) => {
    const car = state.carList.find((el) => el.id === carId);
    const carIdx = state.carts.findIndex((el) => el.id === carId);
    const carItem = state.carts[carIdx];
    const newItem = updateCartItem(car, carItem, quont);

    return updateCartItems(state, newItem, carIdx);
}

const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case "FETCH_CARS_REQUESTED":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_CARS_SUCCEESS":
            {
                return {
                    ...state,
                    carList: action.payload,
                    loading: false,
                    error: null
                }
            }
        case "FETCH_CARS_FAILURE":
            {
                return {
                    ...state,
                    carList: [],
                    loading: false,
                    error: action.payload
                }
            }
        case "CAR_ADDED_TO_CART":
            {
                return {
                    ...state,
                    carts: updateShopCart(state, action.payload, 1),
                    orderTotal: updateOrderTotal(state, )
                }
            }
        case "CAR_REMOVED_FROM_CART":
            {
                return {
                    ...state,
                    carts: updateShopCart(state, action.payload, -1),
                    orderTotal: null
                }
            }
        case "ALL_CAR_REMOVED_FROM_CART":
            {
                const car = state.carts.find((el) => el.id === action.payload);
                const carCount = car.count;
                console.log(carCount)
                return {
                    ...state,
                    carts: updateShopCart(state, action.payload, -1 * carCount),
                    orderTotal: null
                }
            }
        default: {
            return state;
        }
    }
}

export default reducer;