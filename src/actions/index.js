const carRequested = () =>{
    return {
        type: "FETCH_CARS_REQUESTED"   
    }
}

const carLoaded = (data) => {
    return {
        type: "FETCH_CARS_SUCCEESS",
        payload: data
    }
}

const carLoadedError = (error) => {
    return {
        type: "FETCH_CARS_FAILURE",
        payload: error
    }
}

const carAddedToCart = (carId) => {
    return {
        type: "CAR_ADDED_TO_CART",
        payload: carId
    }
}

const carRemovedFromCart = (carId) => {
    return {
        type: "CAR_REMOVED_FROM_CART",
        payload: carId
    }
}

const allCarRemovedFromCart = (carId) => {
    return {
        type: "ALL_CAR_REMOVED_FROM_CART",
        payload: carId
    }
}
export {carLoaded, carRequested, carLoadedError, carAddedToCart, carRemovedFromCart, allCarRemovedFromCart};