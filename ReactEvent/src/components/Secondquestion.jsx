import React, { useState } from 'react'

function Secondquestion() {
    const[count , SetCount] = useState(0)

    const  increment = () => {
        // console.log("increment")
        SetCount(count + 1);
    };

  return (
    <div>
        <h2>count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Secondquestion

// Write a React component with a button that increments a counter value using onClick event.