// // src/
// //  ├── redux/
// //  │    ├── store.js
// //  │    └── formSlice.js
// //  ├── components/
// //  │    └── FormRedux.jsx
// //  ├── App.jsx
// //  └── main.jsx

 // updateform
// import { useDispatch, useSelector } from "react-redux";
// import { submitForm } from "../redux/formSlice";


// function FormRedux() {
//     const form = useSelector((state) => state.form);

//     const dispatch = useDispatch();

//   const [localData, setLocalData] = useState({
//     name: "",
//     email: "",
    
//   });

//   const handleChange = (e) => {
//     setLocalData({
//       ...localData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(submitForm(localData));
//   };
//     return(
//         <div>
//             <input  placeholder="Name" value= {form.name}  onChange = {(e) =>
//             dispatch(updateForm({field: "name" , value: e.target.value}))} />

//             <input placeholder="Email" value = {form.email} onChange={(e) => 
//                 dispatch(updateForm({field : "email", value: e.target.value}))
//             } 
//             />
//             <h3>Submitted Form</h3>
//             <p>Name: {form.name}</p>
//             <p>Email: {form.email}</p>
//         </div>
//     );
// }
// export default FormRedux;

//               submitform
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../redux/formSlice";

function FormRedux() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const [localData, setLocalData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setLocalData({
      ...localData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(localData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {form.submitted && (
        <div>
          <h3>Submitted Form</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormRedux;
