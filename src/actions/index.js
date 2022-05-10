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
export {carLoaded, carRequested};