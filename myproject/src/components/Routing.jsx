 import React from "react";
        import{BrowserRouter, Routes, Route, Link} from "react-router-dom"

function Home(){
    return <h2>Home Page</h2>
}
function Contact (){
    return <h2>Contact Page</h2>
}
function  About() {
    return <h2>About Page</h2>
}

        function Routing() {
             return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
     export default Routing; 
     
     



//      import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() { return <h2>Home</h2>; }
// function About() { return <h2>About</h2>; }
// function Contact() { return <h2>Contact</h2>; }

// function App() {
//   return (
//     <BrowserRouter>
//       <Link to="/">Home</Link> |{" "}
//       <Link to="/about">About</Link> |{" "}
//       <Link to="/contact">Contact</Link>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
