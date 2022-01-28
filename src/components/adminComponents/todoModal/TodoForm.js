import React, {useState, useContext} from 'react';
import dataContext from '../../Context'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaRegFlag} from 'react-icons/fa'
import CurrentProject from '../CurrentProject.jsx';
import axios from 'axios'
import Connection from '../../../Connection'

/*
Bugs To Fix:
  -Fix Project feild not resetting
*/

function TodoForm(props) {
  const url = Connection
  const [icon, setIcon] = useState(false)
  let datum = useContext( dataContext )
  
  const handleSubmit = e => {
    e.preventDefault()
      const project = {
          name: e.target.name.value,
          tasks: [],
          comments: []
      }
      console.log("target.name.value", e.target.name.value);
      console.log("project", project);
      axios.post(`${url}devops`, project)
      .then(res => {
          datum.setProjects([...datum.projects, res.data])
          console.log("project returned",res.data)
        })
      
    }

  const resetFeild = () => {
    console.log(document.getElementByClassName);
      document.getElementByClassName('projectInputField').reset()
    }


return (
  <>
    <div className="dashHeader">
      <CurrentProject />
        {/* The hover state is cool but it makes hitting the button kinda tricky when it changes size. Thoughts on removing? - Tad */}

        <form className='projectForm' onSubmit={handleSubmit}>

          <input
              type='text'
              placeholder='Project Name'
              button={setIcon}
              name="name"
              className="projectInputField"
              />

          <button className='projectBtn' type="submit" onclick={resetFeild}>Add Project</button>

        </form>
        
        <form className="taskForm">
          <input className="taskInputField" type="search" placeholder="Search Tasks" />

          <button className="taskBtn" type="submit"><AiOutlineSearch /></button>
        </form>

    </div>
        
      {/* not sure why its not working currently */}
      {icon ? <div>
      <BiDotsVerticalRounded />
      </div> : null}
              {icon ? <div>
      <FaRegFlag />
      
    </div> : null}
  </>
    );
}


export default TodoForm;