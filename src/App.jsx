import { useState } from 'react'

import './App.css'
import Counter from "./counter.jsx"
import LudoBoard from "./ludoboard.jsx";
import ToDoList from "./todolist.jsx";
import WeatherApp from "./weatherApp.jsx"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter/>
      <LudoBoard/> 
      <ToDoList/> */}
      <WeatherApp/>
    </>
  )
}

export default App
