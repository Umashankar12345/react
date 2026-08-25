import  React , {useState} from 'react';

function TodoApp() {

    const[todo , setTodo] = useState([]);
    const[input , setInput] = useState([]);

    const handleInputChange = (e) => {
        setTodo([...todo , input]);
        // setTodo([...todo , e.target.value]);
        // setTodo(e.target.value);
        // setInput("");

    };
    
  return (
    <div>
      <input value = {input} onChange = {(e) =>setInput(e.target.value)} />
      <button onClick = {handleInputChange}>Add</button>
    </div>
  )
}

export default TodoApp
