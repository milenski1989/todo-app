import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Task.css'

const Task = ({task, index, handleRemoveItem}) => {


	

	return <div className="Task" key={index}> 
		  <div>{task.title}</div>
		  <button onClick={() => handleRemoveItem(index)}>remove</button>
		  <input type="checkbox"></input>
	 </div>
}

export default Task