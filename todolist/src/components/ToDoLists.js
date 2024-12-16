import React, { useState } from 'react';
import "./todolist.css";

function ToDoList() {
  const [inputValue,setInputValue] = useState("");
  const [todos,setTodos] = useState([])
  function handleInputChange (e){
    setInputValue(e.target.value);
    console.log(e.target.value);
  }
  const handleAddTodos= ()=> {
    if (inputValue !==""){
      const newTodo = {
        id:Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos,newTodo])
      setInputValue("");
        }
    
  }
  const handdleToggleChange = (id) =>{
    console.log(id);
    const updatedTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo,completed: !todo.completed}
      }
      return todo;
    })
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };
  const handdleRemoveTodo = (id) =>{
    const filteredTodos = todos.filter((todo)=> todo.id !== id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  }
  return(  
  <div style={{marginTop:"50px"}}>
    <div className="todo-container"> 
      <h1>Todo List</h1>
     
     <div className="todo-input">
     <input type='text' 
     value={inputValue} placeholder='Enter List' onChange={handleInputChange}
     />
     <button onClick={handleAddTodos}>add</button>
     </div>

      <ol className="Todo-List">
        {todos.map((todo)=>(
          <li className={`todo-item ${
            todo.completed === true ? "Completed" : ""
            }`}>
            <input type='checkbox' onChange={()=> handdleToggleChange(todo.id) }/>
            <span className='todo-Text'>{todo.text}</span>
            <button onClick={() => handdleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  </div>
  );
}

export default ToDoList