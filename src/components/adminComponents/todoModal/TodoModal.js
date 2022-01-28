import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Connection from "../../../Connection";
import dataContext from "../../Context";
import './CSS/addTask.css'

function TodoModal(props) {
  const url = Connection;

  const datum = useContext(dataContext);

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();

    const task= {
      projectID: datum.currentProject._id,
    devs: [],
    completed: false,
    subtask: false,
    subtaskArr: [],
    masterTask: null,
    name: e.target.name.value,
    description: e.target.description.value,
    dueDate: "",
    status:"notStarted",
    comments: [{
      comment: "",
      author:"invalidID",
      targets:[]
    }]
  }

    axios.post(`${url}task`, task)
    .then((res) => {
      datum.setTasks([...datum.tasks, task])
      console.log("new task", res.data);
    });
    props.onHide()
  };

  return (
    <>
      <Modal
      id="todoModalDesign"
        {...props}
        size="m"
        className="addingModals"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="addingModalHeader" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Task</Modal.Title>
        </Modal.Header>

        <form className="addingModalBody" onSubmit={handleNewTaskSubmit}>
          <Modal.Body className="">
            <input
              type="text"
              name="name"
              placeholder="Task Name"
              className="taskName"
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="Description"
                as="textarea"
                name="description"
                placeholder="Description"
                rows={3}
              />
            </Form.Group>
          </Modal.Body>

          <Button className="addingButton" type="submit" >Add task</Button>
        </form>

        <Modal.Footer className="addingModalFooter">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoModal;
