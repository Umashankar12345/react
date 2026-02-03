import {useRef} from "react";

function Uncontrolled() {
    const  nameRef = useRef();
    const emailRef = useRef();
    const passRef  = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            nameRef.current.value,
            emailRef.current.value,
            passRef.current.value
        );
    };
    return(
        <form onSubmit ={handleSubmit}>
        <input ref = {nameRef} placeholder ="Name" />
        <input ref={emailRef} placeholder="Email" />
        <input ref={passRef} type="password" placeholder= "Password" />

        <button type="Submit">Register</button>

</form>
    )
}
  
export default Uncontrolled;
