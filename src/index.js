import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import CarstoreService from "./services/carstore-service.js"
import { CarstoreServiceProvider } from './components/carstore-service-context';

const root = ReactDOM.createRoot(document.getElementById("root"))

const carstoreService = new CarstoreService();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <CarstoreServiceProvider value={carstoreService}>
          <Router>
            <App />
          </Router>
        </CarstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

// <Routes>
{/* <Route path='/' element={<Home/>} exact/> */ }
{/* <Route path='/car' element={<CarDetail/>}/> */ }
{/* </Routes> */ }