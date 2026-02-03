// import { useState } from 'react'


// function App(){
//   const[name , setName] = useState("")
//   const[password, setPassword]=useState("")
//   function handleChange(e){
//     console.log(e.target.value)
//     const Name = (e.target.value).toUpperCase()
//     setName(Name)
    
//   }
//   function handlepassword(){
//     console.log(e.target.value)
//     setPassword(e.target.value)
//   }
//   return(
//     <>
//     <form>
//       <label>First Name:</label> <br/>
//       <input type="text" value={name} onChange={handleChange} /><br/>
//       <label>password</label>
//       <input type="text" value={password} onChange={handlepassword}/><br/>

//     </form>
//     </>
//   )
// }
// export default App


// it decide to  show which component 
// import React from "react";

// import Signup from "./Signup";

// export default  function App(){
//     return(
//         <div>
//         <Signup/>
//         </div>
//     )
// }

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ProfilePage from './ProfilePage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         {/* Route with URL Param */}
//         <Route path="/profile/:userId" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// fetch ....................................................

import react from"react";

function App() {
  return (
    <div>
      <h1>Greeting</h1>
      <Endterm/>
    </div>
  );
}

export default App;

// import { Movie } from "./Pages/Movie";
// const App = () => {
//   return  <Movie/>
// };

// export default App;

// import FetchGet  from "./pages/FetchGet" ;
// import FetchPost from "./pages/FetchPost";
// import FetchPut from "./Pages/FetchPUt";
// function App(){
//   return(
//     <div>
//       {/* <h1>Fetch Get Requests Example</h1> */}
//       {/* <FetchGet/> */}
//       {/* <FetchPost/> */}
//       {/* <FetchPut/> */}
//     </div>
//   );
// }
// export default App;