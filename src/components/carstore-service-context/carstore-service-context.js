import React, {createContext} from "react";

const {
    Provider: CarstoreServiceProvider,
    Consumer: CarstoreServiceConsumer
} = createContext();

export {CarstoreServiceProvider, CarstoreServiceConsumer};