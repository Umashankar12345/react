// import React from 'react'
// import { useState, useCallback, useEffect } from 'react';

// import './index.css'



// function App() {
//   const[length , setLength] = useState(8);
//   const[numberAllowed , setNumberAllowed] = useState(false);

//   const[charAllowed , setCharAllowed] = useState(false);

//   const[password , setPassword] = useState("");

//   const passwordGenerator = useCallback(()=> {
//     let password = "";
//     let  str = 
//    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if(numberAllowed)  str += "0123456789";
//     if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

//     for(let i = 1; i <=length; i++){
//       let char = Math.floor(Math.random() * str.length + 1)
//       password += str.charAt(char)
//     }
//     setPassword(password)
//   } , [length , numberAllowed , charAllowed ])
//   //const [count, setCount] = useState(0)
// useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])

//   return (
    
//      <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4  py-3 my-8  bg-gray-800 text-orange-500' >
//       <h1 className='text-white text-center  my-3'>PasswordGenerator</h1>


//       <div className='flex shadow rounded-lg overflow-hidden mb-4'>

//         <input
//          type="text"
//         value={password}
//         className="outline-none w-full py-1 px-3"
//         placeholder="Password"
//         readOnly
//         />
//         <button className='bg-blue-400  px-4 py-1  text-white shrink-0'>copy</button>
//       </div>
//       <div className='flex text-sm gap-x-2 items-center'>


//           <input
//            type="range"
//            min={6}
//            max={100} 
//            value={length}
//            className='cursor-pointer'
//            onChange={(e) => {setLength(e.target.value)}}/>
//            <label>Length: {length}</label>
        
//         <div className='flex items-center gap-x-1' >
//           <input 
//           type="checkbox"
//           Checked={numberAllowed}
//           // id="numberInput"
//           onChange={() => {
//             setNumberAllowed((prev) => !prev)
//           }} 

//           />
        
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//          <div className='flex items-center gap-x-1'>
//           <input 
//           type="checkbox"
//           Checked={charAllowed}
//           // id="numberInput"
//           onChange={() => {
//             setCharAllowed((prev) => !prev)
//           }} 
//           />
// <label htmlFor="charInput">Characters</label>
//       </div>
//       </div>

//     </div>
//   );
// }

// export default App 

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail, resetForm } from "./formSlice";

function App() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\npassword: ${password}`);
    dispatch(resetForm());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
