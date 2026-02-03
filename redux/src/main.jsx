// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'

// import './index.css'
// import App from  "./App.jsx"
// import {store} from "./redux/store"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <UpdatePost/> */}
//    {/* <Provider store = {store}>
//     <App />
//    </Provider> */}
   
//    <Provider store = {store}>
//    <App/>
//    </Provider>
//   </StrictMode>
// )
//incremtnt decrement
import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);