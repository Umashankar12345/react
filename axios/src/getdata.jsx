import {useEffect , useState} from "react";

function getdata() {
    const[users , setUsers] = useSate([]);
    const[loading,setLoading] = useState(true);
    const[error , setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(res.ok){
                throw new Error("Failed  to  fetch users");
            }
            return  response.json();
        })
        .then((data)=> {
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        })
    },[]);

    if(loading) return <h3>Loading....</h3>
    if(error) return <h3>{error}</h3>

    return(
        <ul>
            {users.map((user)=> (
            <li key={users.name}></li>
            ))}
        </ul>
    )
}
export default getdata;