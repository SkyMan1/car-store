const updateCar = (state, action) => {
    switch (action.type) {
        case "FETCH_CARS_REQUESTED":
            return {
                loading: true,
                error: null
            }
        case "FETCH_CARS_SUCCEESS":
            {
                return {
                    carsList: action.payload,
                    loading: false,
                    error: null
                }
            }
        case "FETCH_CARS_FAILURE":
            {
                return {
                    carsList: [],
                    loading: false,
                    error: action.payload
                }
            }
        default:
            return state.cars;
    }
}

export {updateCar}