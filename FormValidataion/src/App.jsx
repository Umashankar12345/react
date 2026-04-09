import React,{ useState } from 'react'

import './App.css'
                //todo app
// function App() {
//   const [count, setCount] = useState("")
//   const [todos , setTodos] = useState([])

//   const addTodo = () => {
//     if(count.trim() === "") return;
//     alert("todo added successfully");
//     console.log(count);
//       setTodos([...todos , count]);
//       setCount("");
//     }
//   const deleteTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i != index);
//     setTodos(newTodos);
//   }

//   return (
//     <div style= {{textAlign: 'center' , marginTop: '40px'}}> 

//     <h1>todo app</h1>
//     <input type = "text" value = {count} placeholder = "Enter your count" onChange={(e) => setCount(e.target.value)} />

//     <button onClick={addTodo}>Add</button>
      
//       <ul>
//         {todos.map((todo , index) => (
//           <li key={index}>{todo}
//           <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
//}


                        //Form validation
                  function App(){
                    const[form , setForm] = useState({
                      username: "",
                      email:"",
                      password: "",

                    });
                    const[error , setError] = useState("");

                    const handleChange = (e) => {
                      setForm({...form , [e.target.name]:
                        e.target.value
                      });
                    };
                      const handleSubmit = (e) => {
                        e.preventDefault();

                        if(!form.username || !form.email || !form.password){
                          setError("All  fields  are required");
                        }else {
                          setError("");
                          alert("Form Submitted");
                        }
                      };
                      return(
                        <form onSubmit={handleSubmit}>
                          <input name = "username" placeholder="Username" onChange = {handleChange} />
                          <input name = "email" placeholder = "email" onChange={handleChange} />
                          <input name = "password" type = "Password" onChange={handleChange} />
                          <button type="submit">Submit</button>
                          <p>{error}</p>
                          </form>
                      )
                    }
                  

export default App
