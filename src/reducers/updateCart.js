const updateCart = (state, action) => {
    switch (action.type) {
        case "CAR_ADDED_TO_CART":
            {
                return updateShopCart(state, action.payload, 1);
            }
        case "CAR_REMOVED_FROM_CART":
            {
                return updateShopCart(state, action.payload, -1)
            }
        case "ALL_CAR_REMOVED_FROM_CART":
            {
                const car = state.cars.carsList.find((el) => el.id === action.payload);
                const carCount = car.count;
                return updateShopCart(state, action.payload, -1 * carCount)
            }
        default: {
            return state.cart;
        }
    }
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
    const { cart: { cartList } } = state;
    if (carIdx === -1) {
        return [
            ...cartList,
            newItem
        ]
    }

    if (newItem.count === 0) {
        return [
            ...cartList.slice(0, carIdx),
            ...cartList.slice(carIdx + 1)
        ]
    }

    return [
        ...cartList.slice(0, carIdx),
        newItem,
        ...cartList.slice(carIdx + 1)
    ]

}

const updateOrderTotal = (state, newItem) => {
    console.log(state.carts);
}

const updateShopCart = (state, carId, quont) => {
    const { cars: { carsList }, cart: { cartList } } = state;
    const car = carsList.find((el) => el.id === carId);
    const carIdx = cartList.findIndex((el) => el.id === carId);
    const carItem = cartList[carIdx];
    const newItem = updateCartItem(car, carItem, quont);

    return {
        cartList: updateCartItems(state, newItem, carIdx),
        orderTotal: null
    }
}

export {updateCart}