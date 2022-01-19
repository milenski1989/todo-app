import React, { useState, useEffect } from "react"
import fakeServer from "../FakeServer"
import Tasks from "./Tasks"
import Modal from 'react-modal'


function Task({ task, index, handleRemoveItem, check }) {

    return (<div className="multiple-tasks-container">
        <div className="single-task-container">
            <div className="new-task" key={index}>
                <input type="checkbox" checked={task.completed} onChange={() => check(index)}></input>
                <div className={task.completed ? "task-completed" : "task-notcompleted"}>
                    {task.title}</div>
                <button onClick={() => handleRemoveItem(index)}>remove</button>
            </div>
        </div>
    </div>

    )


}

export default Task