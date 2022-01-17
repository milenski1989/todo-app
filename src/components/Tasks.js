import React, { useState } from "react"
import Task from "./Task"

export default function Tasks() {
	
  const [tasks, setTasks] = useState([])

  const [inputValue, setInputValue] = useState("")


  function handleAddItem() {
    const task = {
      title: inputValue,
	  completed: false
    }

    setTasks([...tasks, task])
  }

  function takeInputValue(event){
	  
	setInputValue(event.target.value)
}

function handleRemoveItem(index){
	const originalTasks =[...tasks]
	originalTasks.splice(index, 1)
	setTasks(originalTasks)
   }

  return (
    <div className="Tasks">
      {tasks.map((task, index) => <Task task={task} index={index} handleRemoveItem={handleRemoveItem}/>)}
      <input type="text" onChange={takeInputValue}></input>
	  <button type="submit" onClick={handleAddItem}>submit</button>
    </div>
  )
}
