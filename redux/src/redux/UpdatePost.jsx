import{useEffect , useState} from "react"

function UpdatePost(){
    const[post , SetPost] = useState({
        title: " ",
        body: " "  
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => SetPost(data));
    }, []);

    const handleChange  = (e) => {
        SetPost({...post ,[e.target.name] : e.target.value});
    };
    const  handleUpdate = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1" , {

            method: "PUT" , 
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(post)
        })
        .then(res , res.json())
        .then(data => alert("Update Successfully"));
    };
    return(
        <>
        <input name="title" value={post.title} onChange= {handleChange} />
        <textarea name="body" value={post.body} onChange= {handleChange} ></textarea>

        <button onClick={handleUpdate}>Update</button>
        </>
    )
}
export default UpdatePost