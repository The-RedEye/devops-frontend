import React, {useState, useContext, useEffect} from 'react';
import dataContext from './Context';
import { Dropdown } from 'bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import dropdown from 'react-bootstrap/Dropdown'
import Connection from '../Connection'
import ChooseEvent from './generalComponents/ChooseEvent';
import FeedbackFormSubmission from './generalComponents/FeedbackFormSubmission';

const FeedbackForm = () => {

    const datum = useContext(dataContext)
    const url = Connection
    
    
    const [formChosen, setFormChosen] = useState(false)

    useEffect( () => {
        fetch(`${url}event`)
            .then((res) => res.json())
            .then((res) => {datum.setEvents(res) })
            .then((res) => {
                console.log("FeedbackForm Event Data check:", datum.events)
                datum.setCurrentEvent(res[0])
                console.log("currEvent:", datum.currentEvent)
                
            })
            .catch(console.err);

    },[])

    

    return (
        <center>
            <div className="content">
                
               
                
                {console.log("events:", datum.events)}

                {formChosen === false && 
                    <ChooseEvent 
                        formChosen={formChosen}
                        setFormChosen={setFormChosen}
                        />}

                {/* <label for="eventDropdown"> Events: </label>

                <select name="eventDropdown" id="eventDropdown">
                    {datum.events.map((event) => { return
                    <option value={event._id}
                    onClick={() => datum.setCurrentEvent(event)}>
                    {event.name}
                    </option>}
                    )}

                </select>
                 */}
                
                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item >Action</Dropdown.Item>
                    <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item >Something else</Dropdown.Item>
                </DropdownButton> */}


                {/* 
                
                {datum.events.map((event) => {
                    <a class="dropdown-item"
                    onClick={() => datum.setCurrentEvent(event)}>
                    {event.name}
                    </a>}
                )} */}
                
                {formChosen === true &&                    
                    <FeedbackFormSubmission 
                    formChosen={formChosen}
                    setFormChosen={setFormChosen}
                />}
                
                
            </div>

        </center>
      );
};

export default FeedbackForm;