import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Task.css'

const Task = ({task, index, handleRemoveItem}) => {

	const [checked, setChecked] = useState(false)

	function changeCheckBox (event){
		setChecked(event.target.checked)
	
	}

	return <div className="Task" key={index}> 
		  <div>{task.title}</div>
		  <button onClick={() => handleRemoveItem(index)}>remove</button>
		  <input type="checkbox" checked={checked} onChange={changeCheckBox}></input>
	 </div>
}

export default Task