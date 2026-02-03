 import  { useState } from "react";

//  function Greeting(){
//     const  [state, setText] = useState("");
//          return(
//             <div>
//                 <h2>Good Morning</h2>
//             </div>
//          )
//  }
//  export default Greeting;


 function Endterm(){
    const  [state, setText] = useState("Morning");           
    const toggleGreeting = () => {
        if(state === "Morning"){
            setText("Evening");
        }else{      
            setText("Morning");
 }
    };
        return(
           <div>           
           <h2>Good {state}</h2>
               <button onClick={toggleGreeting}>Toggle Greeting</button>
           </div>            
        )
 }
 export default Endterm;





