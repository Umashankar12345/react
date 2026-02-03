
import { useState } from "react";   

function App1(){
    const [username , setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password , setpassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault ();

        console.log("username:" , username);
        console.log("email:" , email);
        console.log("Password:" ,  password);

        alert(`usernmae: ${username}   Email: ${email} Password : ${password}`);
    };
    return (
        <div style={{padding :"20px"}}>
            <h1>Form subission </h1>

            <form onSubmit={handleSubmit}>

        <label>
             Username:
             <input
             type="text"
             value= {username}
             placeholder ="Enter Username"
             onChange={(e) => setusername(e.target.value)} />
        </label>
        <br/> <br/>
        <label >
            Email:
            <input 
            type="text" 
            value={email}
            placeholder="Enter Email"
            onChange= {(e) => setEmail(e.target.value)}

            />
        </label>
        
        <br /> <br />
        <label >
            Password:
            <input 
            type="text"
            value={password}
            
            placeholder= " Enter password"
            onChange= {(e) => setpassword(e.target.value)}/>
        </label>
        <br /> <br />
        <button type="submit">Submit</button>

            </form>
        </div>
    )
    }
    export  default App1;