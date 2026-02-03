import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { useEffect , useState } from "react" ;

function FetchGet(){
    const[users , setUsers] = useState([]);

    const[loading  , setLoading] = useState(true);

    const[error , setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((respose) => {
        if(!response.ok){
            throw new Error("Failed to  fetch data");
 }
        return response.json();
    })
    .then((data) => {
        setUsers(data);
        setLoading(false);
    })
    .catch((err)=> {
        setError(err.message);
        setLoading(false);
    })

},[]);

if(loading){
    return <h3>Loading Users....</h3>
}
if(error){
    return <h3>Error : {error}</h3>
}

return(
    <div>
        <ul>
            {users.map((user) =>(
                <li key = {user.id}>
                    <b>{user.name}</b> - {user.email}
                </li>
            ))}
        </ul>
    </div>
)
}
export default FetchGet;

    

// useeffect to control when the api call runs 
//useState to store the Api data and update it
// fetch alone cannot mange re-rendering in react
// fetch - gets data from Api
// useState - store the data 
// useeffect - decides when the Api call should run