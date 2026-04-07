import React,{ useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState("")
  const [todos , setTodos] = useState([])

  const addTodo = () => {
    if(count.trim() === "") return;
    alert("todo added successfully");
    console.log(count);
      setTodos([...todos , count]);
      setCount("");
    }
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i != index);
    setTodos(newTodos);
  }

  return (
    <div style= {{textAlign: 'center' , marginTop: '40px'}}> 

    <h1>todo app</h1>
    <input type = "text" value = {count} placeholder = "Enter your count" onChange={(e) => setCount(e.target.value)} />

    <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo , index) => (
          <li key={index}>{todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
