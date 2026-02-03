import {useState} from "react";
 
function FetchPost(){
    const[form , setForm] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form ,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users" , {
            method: "POST" ,
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(form)
        })
                .then((response) => response.json())
                .then((data) => {
                    setSubmittedData(data);
                    // console.log("Data submitted:" , data);
                    // alert("user Added Successfully");
                });
            };
            return(
                <div>
                <form onSubmit={handleSubmit}>
                        <input type="text" name ="name" placeholder= "Enter name" onChange={handleChange} required/>
                        <input type="email" name ="email" placeholder= "Enter Email" onChange={handleChange} required/>

                        <button type="submit">Submit</button>
                </form>
                {submittedData && (
                    <div>
                    <h3>submitted Data</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    </div>
                )};
                </div>
            );
        }
     export default FetchPost;