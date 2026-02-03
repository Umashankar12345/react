// Create a React app that uses Axios to perform a GET request to fetch data from a public API (https://jsonplaceholder.typicode.com) and display it on the screen.

import {useEffect , useState} from "react";
import axios from "axios";

function  UserAxios() {
    const[users, setUsers] = useState([]);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);
    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user)=> (
                    <li key= {users.id}>
                        {users.name} -{users.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserAxios;