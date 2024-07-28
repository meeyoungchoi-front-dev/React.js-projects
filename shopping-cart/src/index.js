import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM의 client를 import
import App from "./App"; // Import App component
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"; // Import Provider
import { store } from './stores'; // Import store

// ReactDOM.createRoot를 사용하여 root element 생성
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();