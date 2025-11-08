import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ToDoList(){
    let [todos,setTodos] = useState([{task:"sample task",id:uuidv4(),isDone:false}, ])
    let [newTodo,setNewTodo]= useState("")
    let addTask = ()=>{
        setTodos(()=>{
            return [...todos,{task:newTodo,id:uuidv4(),isDone:false}];
        })
        setNewTodo("");
    }
    let newtodo =(event)=>{
      setNewTodo(event.target.value);
      
    }
    let markDone=(id)=>{
      setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
          if (todo.id == id){
            return {...todo,isDone:true};
          }
          else{
            return {todo};
          }
        })
      )
    };
 return (
    <>
    <input placeholder="enter task" value={newTodo} onChange={newtodo}>
    </input>
    <button onClick ={addTask} >Add Task</button>
    <br></br>
    <br></br>
    <br></br>
    
    <hr></hr><hr></hr>
    <p>TO Dos </p>
    <ul>
      { todos.map((todo)=>(
        todo  ? <li key={todo.id}>
           <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
           <button onClick={() => markDone(todo.id)} >Mark Done</button>
          </li>:""
        ) )}    
    </ul>
    </>
 )
}