import React, { useEffect, useState } from 'react'
import fakeServer from '../FakeServer'
import Task from './Task'
import "./Tasks.css"


function Tasks() {
	const [tasks, setTasks] = useState([])

	const [inputValue, setInputValue] = useState('')

	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		const tasks = fakeServer.loadTasks()
		setTasks(tasks)
	}, [])


	function handleAddItem() {
		const task = {
			title: inputValue,
			completed: false,
		}
		setTasks([...tasks, task])

		fakeServer.createTask(task)
	}

	function takeInputValue(event) {
		setInputValue(event.target.value)
	}

	function handleRemoveItem(index) {
		const originalTasks = [...tasks]
		originalTasks.splice(index, 1)
		setTasks(originalTasks)
		fakeServer.deleteTask(index)

	}

	function check(index) {
		const originalTasks = [...tasks]
		const task = originalTasks[index]
		task.completed = !task.completed
		setTasks(originalTasks)

		fakeServer.updateTask(index, task)

	}

	function filterTasks(event) {

		setSearchValue(event.target.value)

	}

	const filterResult = searchValue.length > 0
		? tasks.filter((task) => task.title.includes(searchValue) ? true : false)
		: tasks


	return (

		<>

			<div className="main-container">
				<input type="text" placeholder="Search for tasks..." onChange={filterTasks}></input>

				<input type="text" placeholder="Add a new task..." onChange={takeInputValue}></input>
				<div className="tasks-item"><button type="submit" onClick={handleAddItem}>
					add
				</button></div>
			</div>


			{filterResult.map((task, index) => (
				<Task task={task}
					index={index}
					handleRemoveItem={handleRemoveItem}
					check={check} >

				</Task>



			))}


		</>

	)
}

export default Tasks