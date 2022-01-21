import React, { useContext, useEffect } from 'react';
import dataContext from '../Context';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './dashboard.css'

const CurrentProject = () => {

  let datum = useContext( dataContext )
  
    function setCurrentProject(project) {
      datum.setCurrentProject(project)
      console.log("currentProject:" , datum.currentProject)
    }
  
  return (
    <>
    <div className="dashHeader">
      <Dropdown>
        <Dropdown.Toggle className='projectDropBtn' variant="" id="dropdown-basic">
          Projects
        </Dropdown.Toggle>

          <Dropdown.Menu>
              {/* <Dropdown.Item href="#">Project 1</Dropdown.Item> */}
              {datum.projects.map( (project) => 
                <Link to={`/devops/${project._id}`}>
                  <Dropdown.Item onClick={ () =>setCurrentProject(project)} href='#'>        
                    {project.name}
                  </Dropdown.Item>
                </Link> 
                )}
              {/* Returning undefined... */}
          
   {/* Need to add the current projects to the dropdown menu. It's rendering the projects so what do I need to do to it?  */}
   {/* Maybe on click just use setCurrentProject to update the state? */}

          </Dropdown.Menu>
      </Dropdown>

    </div>
    </>
  );
};

export default CurrentProject;
