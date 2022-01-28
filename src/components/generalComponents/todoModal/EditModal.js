import React, {useState, useContext, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import Connection from '../../../Connection'
import EditTaskProjectID from './EditTaskProjectID.jsx'
import EditTaskStatus from './EditTaskStatus';
import Completed from '../todoModal/Completed';
import dataContext from '../../Context';
import './CSS/searchTasks.css'

function EditModal(props) {
  const url = Connection
  const datum = useContext(dataContext)
  
  useEffect( () => {
    //sets local useState task as the task found in datum
    
    console.log("EditModal Active Task:", datum.task)
  }, [])
    
  const handleDelete = e => {
    e.preventDefault()

    axios.delete(`${url}task/${props.task._id}`)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    //.then remove from datum
    //.then close modal - add new modal that task is updated
  }
    
  function handleTaskSubmit(e) {
    e.preventDefault();
    const tempTask = props.task;
    
    console.log("status value",e.target.status.value)
    if ( !(e.target.name.value===""  ||  e.target.name.value==null) )
      tempTask.name = e.target.name.value
    if (!(e.target.projectID.value===""   ||  e.target.projectID.value==null))
      tempTask.projectID = e.target.projectID.value
    if( !(e.target.description.value===""  ||  e.target.description.value==null) )
      tempTask.description = e.target.description.value
    if( !(e.target.status.value===""  ||  e.target.status.value==null) )
      tempTask.status = e.target.status.value
    
    // console.log("!!!!!!!-->tempTask/Task", tempTask);
    axios.put(`${url}task/${props.taskId}`, tempTask)
      .then(res => {
        //update datum
        datum.setCurrentTask(tempTask);
        datum.setTasks(...datum.tasks, tempTask);
        console.log(res);
      });

    props.onHide()
  }

    return (
      <>
        <Modal
          {...props}
          size="m"
          className="editModals"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >

          <Modal.Header className="editModalHeader" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
          </Modal.Header>

          <form onSubmit={handleTaskSubmit}>
          
          <Modal.Body className="editModalBody">
            <p>Task Name: {props.task.name}</p>
            <input
              type="text"
              name="task"
              id="name"
              // onChange={handleTaskNameChange}
              placeholder={props.task.name}
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <p>Description: </p>
              <p>{props.task.description}</p>
              <textarea
                type="textarea"
                className="Description"
                as="textarea"
                name="description"
                id="description"
                placeholder={props.task.description}
                rows="3"
              />
            </Form.Group>

            <EditTaskProjectID />
            <EditTaskStatus task={props.task} name="status" id="status" />

            </Modal.Body>

            <Modal.Footer className="editModalFooter">
              <button className="buttonEditModal" onclick={handleDelete} >Delete</button>
              <Button className="buttonEditModal" type="submit" >Update Task</Button>
              <Completed />
              <Button className="buttonCloseModal" onClick={props.onHide}>Close</Button>
            </Modal.Footer>

          </form>

        </Modal>
      </>
    );
}

export default EditModal;