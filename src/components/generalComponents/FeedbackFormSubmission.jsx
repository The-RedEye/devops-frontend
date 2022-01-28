import React, {useState, useContext} from 'react';
import dataContext from '../Context';
import Connection from '../../Connection'
import ThankYouModal from './ThankYouModal';
import axios from 'axios';

const FeedbackFormSubmission = (props) => {
    const space = " "
    const datum = useContext(dataContext)
    const url = Connection

    const [showThankYouModal, setShowThankYouModal] = useState(false)
    const [userName, setUsername] = useState(null)
    const [eventID, setEventID] = useState(null)
    const [relevancy, setRelevancy] = useState(null)
    const [comprehension, setComprehension] = useState(null)
    const [completeness, setCompleteness] = useState(null)
    const [learned, setLearned] = useState(null)
    const [engagement, setEngagement] = useState(null)
    const [comment, setComment] = useState(null)


    const handleFeedbackSubmit = (e) => {
        e.preventDefault()
        props.setFormChosen(false)
        
        datum.setShowThankYouModal(true)
        
        //Thank you modal - not working maybe exiting component too fast

        const feedback = {
            userName: e.target.userName.value,
            userID: "N/A",
            anonymous: e.target.anonymous.value,
            eventID: datum.currentEvent._id,
            relevancy: e.target.relevancy.value,
            comprehension: e.target.comprehension.value,
            completeness: e.target.completeness.value,
            learned: e.target.learned.value,
            engagement: e.target.engagement.value,
            comment: e.target.comment.value,
        }

        console.log("feedback object:" , feedback)

        axios.post(`${url}feedback`, feedback)
            .then((res) => {
                datum.allFeedback([...datum.allFeedback, feedback])
                console.log("new feedback", res.data);
    });
    props.onHide()

    }


    return (
        <>
        
        {datum.showThankYouModal === true && 
        <ThankYouModal hideModal={datum.setShowThankYouModal(false)} />}

        <form onSubmit={handleFeedbackSubmit} >
            
            <center> <h3> -- {datum.currentEvent.name} -- </h3></center>
            <br />
            <label for="userName"> Your Name:</label>
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
            1= less understandable, 5 = more understandable</label>
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
            1= less complete, 5 = more complete</label>
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
            1= less learned, 5 = more learned</label>
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
            1= less engaging, 5 = more engaging</label>
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
            <input className='commentBox' type="text" id="comment" name="comment" size="200" size="5"></input>

            <br />
            <br />
            <br />
            <br />
            <button className='eventButton'>Submit</button>
        </form>
        </>
    );
};

export default FeedbackFormSubmission;