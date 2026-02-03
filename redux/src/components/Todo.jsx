// src/
//  ├── redux/
//  │    ├── store.js
//  │    └── todoSlice.js
//  │
//  ├── components/
//  │    └── Todo.jsx
//  │
//  ├── App.jsx
//  ├── main.jsx
//  └── index.css


import { useState } from "react"
import {useDispatch , useSelector} from "react-redux"

import {todoAdded , todoToggled} from "../redux/todoSlice"

function Todo() {
    const[text , setText] = useState("")
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
  
    return(
        <div>
            <input type="text" placeholder="Enter todo"  onChange = {(e) => setText(e.target.value)}/>
            <button onClick= {() => dispatch(todoAdded(text))}> Add Todo</button>

            <ul>
                {todos.map((todo , index)=> (
                    <li key={index} onClick={() => dispatch(todoToggled(index))}
                //      style = {{
                //     textDecoration: todo.completed ? "line-through" : "none" , cursor: "pointer"
                // }}
                    >{todo.text}</li>
                ))} 
               
            </ul>
        </div>
    )
}
export default Todo