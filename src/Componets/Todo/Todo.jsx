import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [ todo, setTodo] = useState(["Alo","Bendi","Chan"])
    const [ input, setInput] = useState("")

    const handleInputchnage = (e) =>{
        setInput(e.target.value)
        
    }
    const handleAddTodo = ()=>{
       if(input === ""){
        alert("This is Empty")
       }else{
        setTodo([input, ...todo])
       }
    }

    const handleDeletTodo = (item) =>{
        
       setTodo(todo.filter(data=>data !== item))
    }

  return (
    <div className="main">
        <div className="todo_title">
        <h1>Todo App</h1>
        </div>
        <hr />
        <div className="todo_input">
            <input type="text" onChange={(e)=>handleInputchnage(e)} value={input}  placeholder="Enter your todo" />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <div className="todo_list">
            <ul>
            {
                todo.reverse().map((item)=>{
                    return <li> {item} <button onClick={()=>handleDeletTodo(item)}><i class="fa-solid fa-trash-can"></i></button></li>
                })
            }
            </ul>
    </div>
    </div>
  )
}

export default Todo