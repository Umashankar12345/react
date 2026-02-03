
import {useState} from 'react';
 
export default function App2(){
    //onst [form, setform] = useState (0);

    const[form , setForm] = useState({
        username: "",
        lastname: "" ,
        email: "" , 
         password: "" ,
          address: ""
    });
    const handlechange = (e) => 
        setform({...form , [e.target.name]: e.target.value});
    

     const handleSubmit = (e) => {
        e.preventDefault ();
        alert(JSON.stringify(form , null , 2));
     };
      return(
        <>
        <form onSubmit= {handleSubmit}>
        <h1>Form Submission</h1>
        <input  name="username" placeholder=" Enter Username"  value={form.username} onChange={handlechange} />

        <input name="lastname" placeholder= "enter lastname" value= {form.lastname} onChange={handlechange} />
        
        <input name= "Email" placeholder="enter  Email" value = {form.email} onChange={handlechange} />
        <input name="password" placeholder="ENTER  PASSWORD" value={form.password} onChange={handlechange} />
        <input name="address" placeholder = "Enter Address" value= {form.address} onChange= {handlechange} />
        <button  type="submit">Submit</button>
        </form>
        <pre>{JSON.stringify(form , null , 2)}</pre>
           </>
      )
}