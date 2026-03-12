// Create a React program where clicking a button toggles text between “ON” and “OFF”.

import React, {useState} from 'react'

function Sixquestion() {
    const[changeToggles , setChangeToggles] = useState("OFF");
    const Toggles = () => {
        if(changeToggles  === "ON"){
            setChangeToggles("OFF")
        }else 
            setChangeToggles("ON")
    }
  return (
    <div>
        <h2>status:{changeToggles}</h2>
      <button onClick={Toggles}>Change</button>
    </div>
  )
}

export default Sixquestion
