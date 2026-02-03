// Create a React form that:

// Takes name and email

// Sends data to server using POST request with Axios

// // Clears the form after submission


import  {useState} from  'react';

import axios  from 'axios';

function PostData(){
    const[formData , setFormData]  = useState({
        name: " ",
        email: " "
    });
const handleChange =  (e) => {
    setFormData ({
        ...formData,
        [e.target.name]: e.target.value
    });
};

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/users" , formData)
        .then(() => {
            alert("User Added");
            setFormData({name: " ", email: ""});
        });
    };
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input  type ="text"  name= "name" value= {formData.name} onChange = {handleChange} placeholder=" Enter Name"/>
            <input  type = "email" name = "email" value = {formData.email} onChange={handleChange} placeholder=" Enter Email" />
            <button type="submit">Add</button>

        </form>
        </div>
    );
    
}
export default PostData;