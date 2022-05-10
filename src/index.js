import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry';
import BookStoreService from './services/bookstrore-services';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './strore';

const bookstoreService = new BookStoreService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>

           {/* { console.log(bookstoreService.getBooks())} */}
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
