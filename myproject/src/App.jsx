
// import './App.css'

// import image from './image.png' 
// import Card  from  './components/Card';

// function App() {

//   // let myobj = {
//   //   username: "umashankar" ,
//   //    age: 21
//   // }
//   return (
//     <>
//       <h1 className="text-center text-2xl font-bold mt-4">Umashankar</h1>

      

//       <Card />

//       {/* <Card username="Diresh" btnText="visit me"/> */}
//     </>
//   );
// }


// export default App;

// import React from "react"
// import Counter from "./components/counter"

// function App(){
//   return(
//     <div>
//       <h1>Counting number</h1>
//       <Counter/>
//     </div>
//   )
// }
// export default App
//import Counter from "./components/Counter";

// import React from "react"
// import Timer from "./components/Timer"

// function App(){
//   return(
//      <div style= {{textAlign: "center" , marginRight: "5px" , fontWeight: "bold"}}>
//       <h1 style={{color: "blue" ,fontWeight: "bold"}}>class Timer</h1>
//       <Timer/>
//      </div>
//   )
// }
// export default App
// ist code 
// import React, { createContext, useContext, useState } from "react";

// // 1. Create the Context
// const ThemeContext = createContext();

// // 2. Create a Provider component to wrap your app or part of your app
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   // Function to toggle theme between light and dark
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // 3. Create a component that consumes the context value
// function ThemedButton() {
//   // useContext to get current theme and toggle function
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         backgroundColor: theme === "dark" ? "#333" : "#eee",
//         color: theme === "dark" ? "#eee" : "#333",
//         padding: "10px 20px",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//         fontSize: "16px",
//         marginTop: "20px",
//       }}
//     >
//       Current theme: {theme} (Click to toggle)
//     </button>
//   );
// }

// // 4. App component that uses the Provider to wrap children
// function App() {
//   return (
//     <ThemeProvider>
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "lightgray",
//         }}
//       >
//         <h1>React Context and useContext Example</h1>
//         <ThemedButton />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;


// // end login or logout
// import React,{createContext , useContext , useState} from "react";

//  const AuthContext = createContext();

// //  function AuthProvider({children}){
// //   const[isLoggedIn ,setIsLoggedIn] = useState(false);
// //   return(
// //     <AuthContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
// //       {children}
// //     </AuthContext.Provider>
// //   )
// //  };
//   function LoginButton(){
//     const{isLoggedIn , setIsLoggedIn} = useContext(AuthContext);
//     return(
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     )
//   }

//   function Status(){
//     const{isLoggedIn} = useContext(AuthContext);
//     return(
//       <h2>{isLoggedIn ? "User is logged in" : "User is logged out"}</h2>
//     )
//   }

//   function App(){
//     return(
//       <AuthProvider>
//         <div style={{textAlign: "center" , marginTop: "50px"}}>
//           <h1>Authentication Context Example</h1>
//           <Status/>
//           <LoginButton/>
//         </div>
//       </AuthProvider>
//     )
//   }

//   export default App;

//3rrd code
// App.jsx
// import React, { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// function LoginButton() {
//   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

//   return (
//     <button 
//     onClick={() => SVGTextPathElement(theme === "light" ? "dark" : "light")}
//     style ={}
//     // onClick= {() => setIsLoggedIn(!isLoggedIn)}>
//     //   {isLoggedIn ? "Logout" : "Login"}
//     </button>
//   );
// }

// function Status() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return <h2>{isLoggedIn ? "User is logged in" : "User is logged out"}</h2>;
// }

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Authentication Context Example</h1>
//       <Status />
//       <LoginButton />
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Username:", username);
//     console.log("Email:", email);

//     alert(`Username: ${username}\nEmail: ${email}`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Form Using useState</h1>

//       <form onSubmit={handleSubmit}>
//         {/* Username */}
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             placeholder="Enter username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>

//         <br /><br />

//         {/* Email */}
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>

//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       <h2>Live Preview</h2>
//       <p><b>Username:</b> {username}</p>
//       <p><b>Email:</b> {email}</p>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Form from "./Form"

// export default  function App(){
// return(
//     <>
//     <h1>Form submitted</h1>
//     <Form/>
//     </>
// )
// }


      //fetch
    //    import  Fetch from "./components/Fetch"
    //    import FetchPost from "./components/FetchPost";
// import UserAxios from "./components/UserAxios";

//  import UserAxios from "./components/UserAxios";
// import ControlledForm from "./components/ControlledForm"
// import Uncontrolled from "./components/Uncontrolled";
// import Eventhandler from "./components/Eventhandler"
//   import JobForm from "./components/JobForm";
// // import UpdatePost from  "./components/UpdatePost"

//        function App(){
//          return(
//              <div>
           
//                 {/* <ControlledForm/> */}
//                 {/* <Uncontrolled/> */}
//                 {/* // <Eventhandler/> */}
//                 {/* <UpdatePost/> */}
//                 <JobForm/>
//              </div>
//          )
//        }
//        export default App;
//           {/* <Fetch/> */}
//                 {/* <FetchPost/> */}
//                 {/* /* <UserAxios/>  */}

//                 //Routing
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact1 from "./pages/Contact1";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/home">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact1">Contact</Link>
//       </nav>

//       <Routes>

//         <Route path="/home" element={<Home/>} />
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact1" element={<Contact1/>}/>
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;

// Quiz App Routing & Back Navigation
        // Routing


import {BrowserRouter, Routes , Route} from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import Review from "./pages/Review";

function  App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Quiz/>}/>
      <Route path="/quiz" element= {<Quiz/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/review" element= {<Review/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;