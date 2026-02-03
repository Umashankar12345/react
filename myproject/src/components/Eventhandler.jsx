import {useState} from "react";

function Eventhandler(){
    const[text, setText] = useState("");

    return(
        <div>
        <input
         onChange= {(e) => setText(e.target.value)} />
         <button type="Submit">submit</button>
         <p>Typed value: {text}</p>
        </div>
    );
}
export default  Eventhandler;