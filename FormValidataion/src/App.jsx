import React, { useState } from "react";
                  function App(){
                       const[form , setForm] = useState({
                      username: "",
                      email:"",
                       password: "",

                    });
                   const handleonChange = (e) => {
                              alert("Form Submitted");
                      setForm({...form , [e.target.name]:
                        e.target.value
                      });
                    };
                      const handleonSubmit = (e) => {
                        e.preventDefault();
                        console.log();

                        if (!form.username || !form.email || !form.password) {
                   alert("All fields are required");
                return;
    }

             console.log("Form Data:", form);
                 alert("Form Submitted Successfully");
  };
                       
                       return(
                        <form onSubmit={handleonSubmit}>
                          <input type = "text" placeholder="Username" onChange = {handleonChange} />
                          <input type = "email" placeholder = "email" onChange={handleonChange} />
                          <input type = "password" placeholder = "Password" onChange={handleonChange} />
                          <button type="submit">Submit</button>
                     
                          </form>
                      )

                    }
                    export default App