
import React,{useState} from 'react'

function Eightquestion() {
    const[changeButton , setChangeButton] = useState("Morning");
    const events = () => {
        if(changeButton === "Morning"){
            alert("Good Morning")
            setChangeButton("Evening")
            alert("Good evening")
        }else 
            setChangeButton("Morning")
    }
  return (
    <div>
        <h2>color:{changeButton}</h2>
      <button onClick={events}>change</button>
    </div>
  )
}

export default Eightquestion
