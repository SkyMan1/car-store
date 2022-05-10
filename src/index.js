import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Routes } from 'react-router-dom';
import App from './components/app/app';
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>
);

  // <Routes>
    {/* <Route path='/' element={<Home/>} exact/> */}
    {/* <Route path='/car' element={<CarDetail/>}/> */}
  {/* </Routes> */}