//   Create a controlled form with name, email, password and show error messages if fields are empty. 
   
   import {useState} from "react"

function ControlledForm() {
    const[form, setForm] = useState({
        name: "",
        email: "",
         password: ""
    });

    const[error , setError] = useState("");

    const handleChange = (e) => {
        setForm({...form , [e.target.name] : e.target.value});

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.email || !form.password) {
            setError("All fields are required");
        }else {
            setError("");
            alert("Registration Successfully");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder ="Name"  value= {form.name}onChange={handleChange} />
            <input name="email" placeholder="Email"  value = {form.email}onChange ={handleChange} />
            <input name="password" placeholder="password"  value={form.password}onChange={handleChange} />
            <p style={{color: "red"}}>{error}</p>
            <button type="submit">Register</button>

        </form>
    )
}
export default  ControlledForm;