
// Create a React component that
//  changes the background color of the 
// page when a button is clicked.


import React, { useState } from 'react'
const[color , setColor] = useState("white");
const changeColor = () => {
    const newColor = color === "white" ? "lightblue" : "white";
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };
function Fivequestion() {
  return (
    <div>
      <h2>color:{color}</h2>
      <button onClick={changeColor}>color</button>
    </div>
  )
}

export default Fivequestion


