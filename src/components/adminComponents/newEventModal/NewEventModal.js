import React, { useContext , useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Connection from "../../../Connection";
import dataContext from "../../Context";
import './CSS/addTask.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function NewEventModal(props) {
  const url = Connection;

  const datum = useContext(dataContext);
  const [selectedDate, setSelectedDate] = useState(null)

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();

    console.log("e.target.name.value", e.target.name.value);
    console.log("e.target.description.value", e.target.description.value);
    console.log("currentProjectId", datum.currentProject._id);

    const event= {
      name: e.target.name.value,
      date: selectedDate,
      description: e.target.description.value,
      isDefault: e.target.isDefault.value,
    }
  

    axios.post(`${url}event`, event)
    .then((res) => {
      datum.setEvents([...datum.events, res.data])
      console.log("new event", res.data);
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
          <Modal.Title id="contained-modal-title-vcenter">New Event</Modal.Title>
        </Modal.Header>

        <form className="addingModalBody" onSubmit={handleNewTaskSubmit}>
          <Modal.Body className="">
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              className="taskName"
            />
            <div> Event Date: </div>
            <DatePicker 
              selected={selectedDate} 
              onChange={ date => setSelectedDate(date) } />
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
            
            <p>Make this event the default event?</p>
            <input type='radio' id='yes' name='isDefault' value='true' checked />
            <label for='yes'>Yes</label>

            <input type='radio' id='no' name='isDefault' value='false' />
            <label for='no'>No</label>



            </Form.Group>
          </Modal.Body>

          <Button className="addingButton" type="submit" >Add Event</Button>
        </form>

        <Modal.Footer className="addingModalFooter">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewEventModal;
