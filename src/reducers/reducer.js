const initialState = {
    carList: [],
    cart: []
}

const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case "FETCH_CARS_SUCCEESS":
            {
                return {
                    ...state,
                    carList: action.payload
                }
            }
        default: {
            return state;
        }
    }
    //return state;
}

export default reducer;