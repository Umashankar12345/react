// // Quiz App Routing & Back Navigation

// src/
// │── pages/
// │   ├── Quiz.jsx
// │   ├── Result.jsx
// │   └── Review.jsx
// │── App.jsx


import {useNavigate} from "react-router-dom";

const Quiz = () => {
    const navigate = useNavigate();

    return(
        <button onClick = {() => navigate("/result" , { replace: true })}>Submit Quiz 
</button>
    );

};
export default Quiz;