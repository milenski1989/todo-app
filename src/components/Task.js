import React from 'react'
import './Task.css'

const Task = ({task, index, handleRemoveItem}) => {
return <div className="Task" key={index}> 
		  <div>{task.title}</div>
		  <button onClick={() => handleRemoveItem(index)}>remove</button>
	 </div>
}

export default Task