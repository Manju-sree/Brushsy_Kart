import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import {FilterProvider} from "./context/index"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <FilterProvider>
          <App />
        </FilterProvider>   
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
