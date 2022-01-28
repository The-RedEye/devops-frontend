import React, {useEffect, useContext} from 'react';
import dataContext from './Context';

function Fetch(props) {
  const url = "http://localhost:4000/"
  let datum = useContext(dataContext)

useEffect(() => {
  //fetches projects
  fetch(`${url}devops`)
      .then((res) => res.json())
      .then((res) => {datum.setProjects(res)
      console.log("Projects Datum:", datum.projects)
      })
      .catch(console.err);

  //fetches users
  fetch(`${url}user`)
      .then((res) => res.json())
      .then((res) => {datum.setDevs(res)
      console.log("Dev Data:", datum.devs)
      })
      .catch(console.err);

  //fetches tasks
  fetch(`${url}task`)
      .then((res) => res.json())
      .then((res) => {datum.setTasks(res)
      console.log("Task/To-Do Daum:", datum.tasks)
      })
      .catch(console.err);

  }, [])


  return (
    <span>
      
    </span>
  );
}

export default Fetch;