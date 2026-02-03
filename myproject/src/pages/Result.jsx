import {useNavigate} from "react-router-dom";

const Result = () =>  {
    const navigate = useNavigate();
    return(
        <>
<h2>Result Page</h2>
<button onClick = {() => navigate(-1)}>Back</button>

<button onClick = {() => navigate("/review")}>Review</button>
</>
    );
};
export default Result;