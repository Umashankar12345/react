// import React,{ useState } from 'react'

// import './App.css'
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


//                         //Form validation
//                   function App(){
//                        const[form , setForm] = useState({
//                       username: "",
//                       email:"",
//                        password: "",
// //dddddddddddd
//                     });
//                       const[error , setError] = useState("");

//                           const handleChange = (e) => {
//                       setForm({...form , [e.target.name]:
//                         e.target.value
//                       });
//                     };
//                       const handleSubmit = (e) => {
//                         e.preventDefault();

//                         if(!form.username || !form.email || !form.password){
//                           setError("All  fields  are required");
//                         }else {
//                           setError("");
//                           alert("Form Submitted");
//                         }
//                       };
//                       return(
//                         <form onSubmit={handleSubmit}>
//                           <input name = "username" placeholder="Username" onChange = {handleChange} />
//                           <input name = "email" placeholder = "email" onChange={handleChange} />
//                           <input name = "password" type = "Password" onChange={handleChange} />
//                           <button type="submit">Submit</button>
//                           <p>{error}</p>
//                           </form>
//                       )
//         const


// import React,{ useState } from 'react'

// import './App.css'
// function App() {
// const[form , setForm] = useState({
//   email: "",
//   username: "",
//   password: "",
//   contact: "",
// });
// const[error,setError] = useState("");

// const  handleChange = (e) => {
//   setForm({...form , [e.target.name]:  e.target.value});
// };
//   const handleSubmit  = (e) => {
//     e.preventDefault();
  

//   if(/[0-9]/.test(form.username)){
//     setError("username should not contain numbers");
//     return;
//   }
//   if(!form.email.includes("@")){
//     setError("enter valid email");
//     return;
//   }
//   if(form.password.length < 6){
//     setError("password should be at least 6 characters");
//     return;
//   }
//   if(/[@$#%]/. test(form.password)){
//     setError("password should contain at least one special character");
//     return;
//   }
// if(!/^[0-9]{10}$/. test(form.contact)){
//   setError("contact should be 10 digit number");
//   return;
// };
// setError("");
// alert("form submitted successfully");
// }
//   return(
//     <form onSubmit = {handleSubmit}>
//       <input type="text" name = "username" placeholder="Enter username" onChange={handleChange} />
//       <input type="text" name = "email" placeholder="Enter email" onChange={handleChange} />
//       <input type="password" name = "password" placeholder="Enter password" onChange={handleChange} />
//         <input
//         type="text"
//         name="contact"
//         placeholder="Enter contact"
//         onChange={handleChange}
//       />    

//         <br /> <br />
//         <button type="submit">Submit  </button>      
//         <p>{error}</p>  
//     </form>
//   )

// }
// export default App
