// Write a React program to 
// change the text of a <p> tag
//  when a button is 
// clicked.

import React from 'react'
import { useState } from 'react';

function Fourquestion() {
    const[text , setText] = useState("");

    const Button = () => {
        setText("text clicked");
    }
  return (
    <div>
        {/* <input type="text" onChange={(e) =>      } */}
        <p>text:{text}</p>
      <button onClick={Button}>Button</button>
    </div>
  )
}

export default Fourquestion
