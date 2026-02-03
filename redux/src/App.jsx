// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment } from './features/counterSlice'
// import { decrement  } from './features/counterSlice'
// import { IncreamentByAmount } from './features/counterSlice'
// import { DecreamentByAmount } from './features/counterSlice'

// function App() {

//   const dispatch = useDispatch()
//   const count = useSelector((state)=>state.counter.value)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick= {() => {
//         dispatch(increment())
//       }}>Increment</button>
//       <button onClick={() => {
//         dispatch(decrement())
//       }}>decrement</button>
//       <button onClick={()=> {
//         dispatch(IncreamentByAmount(10))
//       }}>IncreamentByAmount</button>

//       <button onClick={() =>{
//         dispatch(DecreamentByAmount(10))
//       }}>DecreamentByAmount</button>
//     </div>
//   )
// }

// export default App;


//second question related to card 
import React from "react"
 import Todo from "./components/Todo"
// import FormRedux from "./components/formRedux";

// import UpdatePost from "./redux/UpdatePost";
// import Counter from "./counter";
function App(){
  return (
    <div>
  {/* <h1>Update Post  </h1>
{/* 
      <Product/>
      <Cart/> */}
      {/* <UpdatePost/> * */}
      <h1>Todo App Using redux</h1>
      <Todo/>

      {/* <h1>FormRedux</h1>
      <FormRedux/> */}
      {/* <h1>Counter</h1>
       <Counter/> */}
      </div>
   
  );
}
export default App;