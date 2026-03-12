// 7.

// Create a React component that displays the mouse cursor position using onMouseMove.

import React,{useState} from 'react'

function Sevenquestion() {
    const[position , setPosition] = useState({x: 0 , y: 0})
    
    const handleMouseMove = (event) => {
        setPosition({
                x:event.clientX,
                Y:event.clientY
        })

        
    }
  return (
    <div onMouseMove={handleMouseMove}
    style={{height: "100vh" , textAlign: "Center" , PaddingTop:"50px"}}
    >
        <h2>Mouse Position</h2>
        <p>X:{position.x}</p>
        <p>Y: {position.y}</p>

        

    </div>
  )
}

export default Sevenquestion
