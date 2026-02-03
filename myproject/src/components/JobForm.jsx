// Form Validation (Age, Phone, Experience)


import {useState} from "react";

const JobForm = () => {
    const[values , setValues] = useState({
        age: "",
         phone: "",
         experience: "",
    });
    const[errors, setErrors] = useState({});
        const validate = () => {
            let err= {};

            if(values.age < 18 || values.age  > 65)
                err.age = "Age must be 18 to 65";

            if(!/^[0-9]{10}$/.test(values.phone))
                err.phone = "phone must be 10 digits";

            if(values.experience < 0)
                err.experience ="Experience must  be 0 or more";

            setErrors(err);
            return Object.keys(err).length === 0;

        };
        const handleBlur = (field) => {
            validate();
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if(validate()) alert("Form Submitted");
        };
        return(
        <form onSubmit={handleSubmit}>
      <input
        placeholder="Age"
        onBlur={() => handleBlur("age")}
        onChange={(e) => setValues({ ...values, age: e.target.value })}
      />
      {errors.age}

      <input
        placeholder="Phone"
        onBlur={() => handleBlur("phone")}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
      />
      {errors.phone}

      <input
        placeholder="Experience"
        onBlur={() => handleBlur("experience")}
        onChange={(e) => setValues({ ...values, experience: e.target.value })}
      />
      {errors.experience}

 <button disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default JobForm;