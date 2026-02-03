// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import Uncontrol from './Uncontrol.jsx'
// import Signup from './Signup'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Signup />
//   </StrictMode>
// )

// it shows on display 
import React from "react";

import ReactDOM from  "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)