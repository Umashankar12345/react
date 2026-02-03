import {useSelector, useDispatch} from "react-redux";
import{increment,decrement} from "./features/counterSlice";


function Counter(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick = {() => dispatch(increment())}>increase</button>
        <button onClick = {() => dispatch(decrement())}>decrease</button>  
           </>
    );
}
export default Counter;