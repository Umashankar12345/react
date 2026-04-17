import { useState } from "react";

function Todolist(){
    const[input , setInput] = useState("");

    const[todos , setTodos] = useState([]);

    const addTodo = () => {
        if(input.trim() === "" ) return;
        setTodos([...todos, input]);
        setInput("");
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((item , i) => i != index);
        setTodos(newTodos);
    }

    return(
        <div style= {{textAlign: 'center' , marginTop: '40px'}}>

            <h1>Todo List</h1>

            <input type="text" value={input} placeholder="Enter Task" onChange={(e) =>setInput(e.target.value)} />

            <button onClick={addTodo}>add</button>

            <ul>
                {todos.map(( todo , index) => (
                    <li key ={index}>{todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                )) }
            </ul>

        </div>
    )
}
export default Todolist