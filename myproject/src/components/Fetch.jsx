import {useEffect , useState} from "react";

function Fetch(){
    const[users , setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/Fetch")
        .then((response) => response.json())
        .then((data) => setUsers(data));

    } ,[]);

    return(
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user)=> (
                    <li key={Fetch.id}>
                        {user.name} -{user.email}
                    </li>
                ))}
            
            </ul>
        </div>
    );
}
export default Fetch;