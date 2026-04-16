// import { useState } from "react";

// function Toggle(){
//     // const[On , setOn] = useState(false);
// const[morning , setMorning] = useState("Morning")

// const events = () => {
//     if(morning){
//         setMorning("Evening");
//     }else{
//         setMorning("Morning");
//     }
// }
//     // const Toggle = () => {
//     //     setOn(!On);
//     // }
    
//     // return(
//     //     <div>
//     //         <h1>{On ? "ON" : "OFF"}</h1>
//     //         <button onClick={Toggle}>Toggle</button>
//     //     </div>
//     // )
// return(
//     <div>
//         <h1>color: {morning}</h1>
//         <button onClick={events}>grret</button>
//     </div>
// )
// }
// export default Toggle;

import { useState } from "react";
 function Toggle(){
    //function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} />
      <p>{text}</p>
      <button >submit</button>
    </div>
  );
// }
    // const[Button , setButton] = useState("Morning")

    // const events = () => {
    //     if(Button === "Morning"){
    //         alert("Good Evening")
    //         setButton("Evening");
    //     }else{
    //         alert("Good Morning")
    //         setButton("Morning");
    //     }
    // }

    // return(
    //     <div>
    //         <h1>Good: {Button}</h1>
    //         <button onClick={events}>wishes</button>
    //     </div>
    // )
 }
 export default Toggle;
