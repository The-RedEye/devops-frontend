import React, { useContext } from 'react';
import dataContext from '../Context';

const ChooseEvent = (props) => {

    const datum = useContext(dataContext)

    function changeEvent(event){
        datum.setCurrentEvent(event)
        props.setFormChosen(true)
        console.log("current event:", event)
    }

    return (
        <div>
             <h2>Please choose Event to give feedback</h2>

            {datum.events.map((event) => {
                return <p><button type="button" className='eventButton' value={event._id}
                onClick={() => changeEvent(event)}>
                {event.name}
                </button></p>}
                )}
        </div>
    );
};

export default ChooseEvent;