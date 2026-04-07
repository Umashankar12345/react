import React, { useState } from 'react'
import axios from 'axios';
 import { useEffect } from 'react';
function AxiosPost() {
    const data = {fname: " " , femail: "" , fpassword: ""}

    const [inputData , setInputData] = useState({fname: " " , femail: "" , fpassword: ""});

    const  handleData = (e) => {
        setInputData({...inputData , [e.target.name]: e.target.value})
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts' , inputData).then((res) => {
            console.log(res.data);
        })
    }
    
  return (
    <>
      <label>FirstName</label>
      <input type="text"  name='fname' value={inputData.fname}  onChange={handleData}/>

      <label>Email</label>
    <input type="text" name='femail' value={inputData.femail} onChange={handleData} />

    <label>Password</label>
    <input type="text" name="fpassword" value={inputData.fpassword}  onChange={handleData} />

    <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default AxiosPost;
