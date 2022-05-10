import React from "react";
import store from "../../store";
import { Route, Routes } from "react-router-dom";
import { HomePage, CarDetailPage } from "../pages"


const App = () => {

    store.dispatch({
        payload: {},
        type: "Test"
    })

    return (
        <main role="main" className="container">
        <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/car" element={<CarDetailPage />}/>
        </Routes>
        </main>
    )
}

export default App;