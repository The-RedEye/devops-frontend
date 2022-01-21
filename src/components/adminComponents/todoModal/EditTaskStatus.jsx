import React , {useState, useContext} from 'react';
import dataContext from '../../Context';

const EditTaskStatus = ( {props} ) => {
  const datum = useContext(dataContext)
  console.log("datum-currentTask:", datum.currentTask)

  const [status, setStatus] = useState([])

  const handleStatusChange = e => {
    console.log("StatusChange handler event:", e.target.value)
    // setStatus(previousState => ({
    //   ...previousState,
    //   status: e.target.value
    // }))
  }

  return (
    <div >
      Current Status: {datum.currentTask.status}
      <p>
        <label name="status">
        <input type="radio"  id="status" value="notStarted" name="status" 
        onClick={handleStatusChange} />
        Not Started
        </label>
      <label name="status">
        <input type="radio"  id="status" value="inProgress" name="status" 
        onClick={handleStatusChange}/>
        In Progress
      </label>

      <label name="status">
        <input type="radio"  id="status" value="inReview" name="status" 
        onClick={handleStatusChange}/>
        In Review
      </label>

      </p>
    </div>
    
    
  );
};

export default EditTaskStatus;