// import {useState} from "react";
// function FetchPut(){
//     const[title , setTitle] = useState("");
//     const[message , setMessage] = useState("");
//     const[success , setSuccess] = useState("");
//     const[subittedMessage , setsubmittedMessage] = useState("");

//     const handleUpdate = () => {
//         fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method : "PUT" ,
//             headers : {
//                 "content-Type" : "application/json"

//             },
//             body : JSON.stringify({
//                 id: 1,
//                 title : title,
//                 body : message,
//                 userId : 1
//                         })
        
//     }) 
//     .then(response => response.json())
//     .then(data => {
//         setSuccess("Post Updated Successfully");
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// };
// return(
//     <div>
//         <h2> Put updatedd</h2>

//         <input
//         type = "text"
//         placeholder = "Enter Title"
//         value = {title}
//         onChange = {e  => setTitle(e.target.value)}
//         />
//         <br /><br />

//         <textarea
//         placeholder="New Message"
//         value = {title}
//         onChange = {e => setMessaage(e.target.value)}

// />
// <br /><br/>
// <button onClick = {handleUpdate}> Update </button>
// {success && <p>{success}</p>}
//     </div>
// );
// }
// export default FetchPut;



import { useState, useEffect } from "react";

function  FetchPUt() {
    const[title , setTitle] =  useState("");
    const[msg , setMsg] = useState("");


    //GET Old data
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => setTitle(data.title))
    },[]);

    const updatePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method :"PUT",
            headers : {
                "Content-Type" : "application/json"},
                body: JSON.stringify({
                    id: 1,
                    title : title,
                    body : "Updated body",
                    userId : 1
                })
            
        })
        .then(response => response.json())
        .then(()=> setMsg("Post Updated Successfully"));
    };
    return(
        <div>
            <h2> Put Data Example </h2>
            <input
           
            value = {title}
            onChange = {e  => setTitle(e.target.value)}
            />

            <br /><br />
            <button onClick ={updatePost}> Update </button>
            {msg && <p>{msg}</p> }
            </div>
            
) ;

}
export default FetchPUt;