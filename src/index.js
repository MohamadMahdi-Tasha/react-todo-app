// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";

// Variables
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendering Whole App With Strict Mode Of React In Selected Root
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);