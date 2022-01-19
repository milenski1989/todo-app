import React, { useState, useEffect } from "react"
import fakeServer from "../FakeServer"
import Tasks from "./Tasks"
import Modal from 'react-modal'
Modal.setAppElement('#root')


function Task({ task, index, handleRemoveItem, check }) {



    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalDescription, setModalDescription] = useState(task.modalDescription)



    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)

    }

    function handleModalDescription(event) {
        const newTask = { ...task }
        newTask.modalDescription = event.target.value
        setModalDescription(event.target.value)
        fakeServer.updateTask(index, newTask)

    }

    return (

        <div className="multiple-tasks-container">
            <div className="single-task-container">
                <div className="new-task" key={index}>

                    <div className={task.completed ? "task-completed" : "task-notcompleted"}>
                        {task.title}</div>
                </div>
                <div className="remove-task-btn"><button onClick={() => handleRemoveItem(index)}>Remove</button></div>

                <div className="modal-container">
                    <button className="open-modal-btn" onClick={openModal}>Edit</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                    >
                        <div className="modal-task-title">{task.title}</div>
                        <button onClick={closeModal}>close</button>
                        <div> <input type="checkbox" checked={task.completed} onChange={() => check(index)}></input></div>
                        <textarea value={modalDescription} onChange={(event) => handleModalDescription(event)}></textarea>

                    </Modal>
                </div>
            </div>
        </div>


    )


}

export default Task