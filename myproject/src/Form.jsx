
import React, {useState} from "react";
 
export default function Form() {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        Reg:""
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    return(
        <form 
        onSubmit={handleSubmit}
        style={{display: "flex",flexDirection:"Row"}}>
            <input
             name="name" 
             placeholder="Name"
             value={formData.name}
             onChange={handleChange}
             />
            <input
             name="email"
             placeholder="email"
             value={formData.email}
             onChange={handleChange}
             
             />
             <input
             name= "age"
             placeholder="Age"
             value={formData.age}
             onChange={handleChange}
             />
             <input
             name="Reg"
             placeholder="Reg"
             value= {formData.Reg}
             onChange={handleChange}
             
             />
             <button type="submit">Submit</button>
        </form>
    )
}