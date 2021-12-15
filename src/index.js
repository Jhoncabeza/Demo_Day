import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import "./index.css";
import AppContext from './context/appContext';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <AppContext.AppProvider>
    <Router>
      <AppRouter />
    </Router>
  </AppContext.AppProvider>,
  document.getElementById('root')
);