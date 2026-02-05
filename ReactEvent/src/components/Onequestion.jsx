import React from 'react'

function onequestion() {

    const Button = () => {
        alert("i a button");
            console.log("clcik me")
    }
  return (
    <div>
      <button onClick={Button}>Button</button>
    </div>
  )
}

export default onequestion
