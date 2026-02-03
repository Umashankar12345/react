// import React,{useState} from "react";


// export default function Signup(){
//     const[formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "" ,
//         confirmPassword: ""
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]:e.target.value
//         });
//     };

//     const  handleSubmit = (e) => {
//         e.preventDefault();

//         if(formData.password !== formData.confirmPassword){
//             alert("Passwords do not match !");
//             return;
//         }
//         alert("Signup Successful");
//         console.log(formData);
//     };
//     return(
//         <div style={styles.container}>
//             <h2>Signup Form</h2>
//             <form onsubmit={handleSubmit} style={styles.form}>

//                 <input 
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value= {formData.name}
//                 onChange={handleChange}
//                 required
                
                
//                 />
//                 <input
//                  type="email"
//                  name="email"
//                  placeholder="Email Address"
//                  value={formData.email}
//                  onChange={handleChange}
//                  required
//                  />
//                  <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   />
//                   <input 
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
                  
//                   />
//                   <button type="submit">Sign up</button>
//             </form>
//         </div>
//     );
// }

// const styles= {
//     container: {
//         width: "300px",
//         margin: "auto",
//         marginTop:"40px",
//         padding: "20px",
//         border: "1px solid #ddd",
//         borderRadius: "10px"

//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//         gap : "12px"
//     }
// };