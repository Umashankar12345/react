import React from 'react'

function Thirdquestion() {

    const button = () => {
        alert("Hello user");
    }
  return (
    <div>
      <button onClick={button}>Button</button>
    </div>
  )
}

export default Thirdquestion

//Create a React component that shows an alert box saying “Hello User” when a button is clicked.