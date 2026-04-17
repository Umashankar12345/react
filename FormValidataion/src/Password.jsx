import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (value) => {
    if (value.length < 6) {
      setError("Min 6 characters required");
    } else if (!/[A-Z]/.test(value)) {
      setError("Must contain uppercase letter");
    } else if (!/[0-9]/.test(value)) {
      setError("Must contain number");
    } else {
      setError("");
      alert("password created successfully");
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    validate(password);
    console.log(password)
  };


  return (
    // <div>
    <form onSubmit ={Submit}>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          validate(e.target.value);
        }}
      />
      <button type= "Submit">submit</button>
      <p style={{color:"red"}}>{error}</p>
    </form>
  );
}

export default Password;