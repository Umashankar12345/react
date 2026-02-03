import  {useState} from "react";

   function FetchPost(){
    const[title , setTitle] = useState("");
    const[message , setMessage] = useState(""); 
    const[success , setSuccess] = useState("");
    const[submittedMessage , setSubmittedMessage] = useState("");


    const handleSubmit = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title : title ,
                body : message,
                userId : 1
            })
        })
        .then(response => response.json())
        .then(data => {
            setSuccess("Post created successFully!");
            setSubmittedMessage(message);
            setMessage("");
            console.log(data);

        })
        .catch(error =>  console.log(error));

    };
    return(
        <div>
            <h2>Post Request Example</h2>

            <input
            type = "text"
            placeholder = "Title"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <br /> <br />
            <textarea
            placeholder = "Message"
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            />
            <br /> <br />
            <button onClick = {handleSubmit}> Submit</button>
             {success && <p>{success}</p>}
      {submittedMessage && (
            <p>
                <b>Your message:</b> {submittedMessage}
            </p>
      )}
        </div>
    )
}
export default FetchPost;