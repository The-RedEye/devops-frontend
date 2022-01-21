import React, {useContext}  from 'react';
import dataContext from '../../Context';

const EditTaskProjectID = () => {
  const datum = useContext(dataContext)
  return (
    <>
    <p>Current Project ID: {datum.currentTask.projectID}</p>
    <input id="projectID" type="text" name="projectID" placeholder={datum.currentTask.projectID} />
    </>  
  );
};

export default EditTaskProjectID;