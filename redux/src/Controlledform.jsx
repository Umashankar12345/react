// import { useState } from "react";

// function ControlledForm() {
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//     if (e.target.value.length < 2) {
//       setError("Name must be at least 2 characters");
//     } else {
//       setError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (error) {
//       alert("Please fix errors");
//     } else {
//       alert("Form Submitted");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={name} onChange={handleChange} />
//       <p style={{ color: "red" }}>{error}</p>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ControlledForm;



// // uncontrolledForm.jsx
// import { useRef } from "react";

// function UncontrolledForm() {
//   const nameRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (nameRef.current.value.length < 2) {
//       alert("Name must be at least 2 characters");
//     } else {
//       alert("Form Submitted");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={nameRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UncontrolledForm;
