
import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

  return (
    <div  style={{textAlign:"Center" , marginTop : "50px" , color:"Green"}}>
        <h2>Count: {count}</h2>
    <button onClick={()=> setCount(count + 1)}>Increase</button>
    <button onClick={()=> setCount(count - 1)}>Decrease</button>
    <button onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}

export default Counter
