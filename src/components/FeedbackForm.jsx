import React, {useState, useContext, useEffect} from 'react';
import dataContext from './Context';
import { Dropdown } from 'bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import dropdown from 'react-bootstrap/Dropdown'
import Connection from '../Connection'

const FeedbackForm = () => {

    const datum = useContext(dataContext)
    const url = Connection
    const [userName, setUsername] = useState(null)
    const [eventID, setEventID] = useState(null)
    const [relevancy, setRelevancy] = useState(null)
    const [comprehension, setComprehension] = useState(null)
    const [completeness, setCompleteness] = useState(null)
    const [learned, setLearned] = useState(null)
    const [engagement, setEngagement] = useState(null)
    const [comment, setComment] = useState(null)
    const space = " "

    function changeEvent(event){
        datum.setCurrentEvent(event)
        console.log("current event:", event)
    }

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
                <h1> ------ </h1>
                <h1> ------ </h1>
                <h2>Please choose Event to give feedback</h2>
                
                {console.log("events:", datum.events)}

                {datum.events.map((event) => {
                   return <p><button type="button" value={event._id}
                    onClick={() => changeEvent(event)}>
                    {event.name}
                    </button></p>}
                    )}


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
                

                
                <form>
                    <hr />
                    <center>Current Event</center>
                    <br />
                    <label for="userName"> Your Name (optional)</label>
                    <input type="text" name="userName" id="userName"></input>
                    <br />

                    <label for="anonymous">Do you wish to submit anonymously?</label>
                    <br />
                    Yes {space}
                    <input type="radio" id="1" name="anonymous" value="true" /> {space}
                    {space}{space}{space}{space}{space}
                    <input type="radio" id="2" name="anonymous" value="false" checked /> {space}
                    {space} No
                    <br />
                    <hr />

                    <label for="relevancy">How relevant did you find the topic? 
                    <br />
                    1= less relevant, 5 = more relevant</label>
                    <br />
                    1 {space}
                    <input type="radio" id="1" name="relevancy" value="1" /> {space}
                    <input type="radio" id="2" name="relevancy" value="2" /> {space}
                    <input type="radio" id="3" name="relevancy" value="3" checked /> {space}
                    <input type="radio" id="4" name="relevancy" value="4" /> {space}
                    <input type="radio" id="5" name="relevancy" value="5" /> {space}                    
                    {space} 5
                    <br />
                    <hr />

                    <label for="comprehension">How understandable did you find the topic? 
                    <br />
                    1= less relevant, 5 = more relevant</label>
                    <br />
                    1 {space}
                    <input type="radio" id="1" name="comprehension" value="1" /> {space}
                    <input type="radio" id="2" name="comprehension" value="2" /> {space}
                    <input type="radio" id="3" name="comprehension" value="3" checked /> {space}
                    <input type="radio" id="4" name="comprehension" value="4" /> {space}
                    <input type="radio" id="5" name="comprehension" value="5" /> {space}                    
                    {space} 5
                    <br />
                    <hr />

                    <label for="completeness">How complete did you find the coverage of the topic? 
                    <br />
                    1= less relevant, 5 = more relevant</label>
                    <br />
                    1 {space}
                    <input type="radio" id="1" name="completeness" value="1" /> {space}
                    <input type="radio" id="2" name="completeness" value="2" /> {space}
                    <input type="radio" id="3" name="completeness" value="3" checked /> {space}
                    <input type="radio" id="4" name="completeness" value="4" /> {space}
                    <input type="radio" id="5" name="completeness" value="5" /> {space}                    
                    {space} 5
                    <br />
                    <hr />

                    <label for="learned">How much of this topic did you learn from or found new as opposed to knowing it already?
                    <br />
                    1= less relevant, 5 = more relevant</label>
                    <br />
                    1 {space}
                    <input type="radio" id="1" name="learned" value="1" /> {space}
                    <input type="radio" id="2" name="learned" value="2" /> {space}
                    <input type="radio" id="3" name="learned" value="3" checked /> {space}
                    <input type="radio" id="4" name="learned" value="4" /> {space}
                    <input type="radio" id="5" name="learned" value="5" /> {space}                    
                    {space} 5
                    <br />
                    <hr />

                    <label for="engagement">How engaging did you find topic and/or the presenter(s)? 
                    <br />
                    1= less relevant, 5 = more relevant</label>
                    <br />
                    1 {space}
                    <input type="radio" id="1" name="engagement" value="1" /> {space}
                    <input type="radio" id="2" name="engagement" value="2" /> {space}
                    <input type="radio" id="3" name="engagement" value="3" checked /> {space}
                    <input type="radio" id="4" name="engagement" value="4" /> {space}
                    <input type="radio" id="5" name="engagement" value="5" /> {space}                    
                    {space} 5
                    <br />
                    <hr />

                    <label for="comment">Any extra comments or suggestions</label>
                    <br />
                    <input type="text" id="comment" name="comment" size="200" maxlength="5" size="5"></input>

                    <br />
                    <br />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>

        </center>
      );
};

export default FeedbackForm;