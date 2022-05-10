import React from "react";
import store from "../../store";
const App = () =>{

    store.dispatch({
        payload: {},
        type: "Test"
    })

    return <div>Hello</div>
}

export default App;