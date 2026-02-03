// src/
// │── components/
// │   └── UpdatePost.jsx
// │── App.jsx
// │── main.jsx
// Question Summary

// Fetch post data based on postId

// Show data in form

// Update data using PUT

// API: https://jsonplaceholder.typicode.com/posts
import {useEffect , useState} from "react";

import axios from "axios";

const updatePost = () => {
    const[postId, setPostId] = useState(1);

    const[title , setTitle] = useState("");

    const[body , setBody] = useState("");


    useEffect(() => {
        axios.get(`https://jsonPlaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
            setTitle(res.data.title);
            setBody(res.data.body);
        });
    },[postId]);

    const handleUpdate = () => {
        axios.put(`https://jsonPlaceholder.typicode.com/posts/${postId}`, {
            title:title,
            body: body,
        });
        alert("Post Update Successfully");

    };
    return(
        <div>
            <h2>Update Post</h2>

            <input type="Number" value = {postId} onChange = {(e) => setPostId(e.target.value)} />
            <textarea value = {body} onChange = {(e) => setBody(e.target.value)} />

                <button OnClick = {handleUpdate}>Update Post</button>
        </div>
    )
}
export default  updatePost;