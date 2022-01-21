import React, {useContext, useEffect} from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from '../../components/adminComponents/SideNavbar'
import AdminRouter from './AdminRouter';
import Header from './Header';
import axios from 'axios';

import dataContext from '../Context';
import Connection from '../../Connection'
import { MdOutlineIndeterminateCheckBox } from 'react-icons/md';

const AdminPage = () => {

const url = Connection
const datum = useContext(dataContext)

useEffect(() => {
  //fetches projects
  fetch(`${url}devops`)
      .then((res) => res.json())
      .then((res) => {datum.setProjects(res)
      console.log("Initial Projects Data fetch:", datum.projects)
      })
      .catch(console.err);

  //fetches users
  fetch(`${url}user`)
      .then((res) => res.json())
      .then((res) => {datum.setDevs(res)
      console.log("Initial Dev Data fetch:", datum.devs)
      })
      .catch(console.err);

  //fetches tasks
  fetch(`${url}task`)
      .then((res) => res.json())
      .then((res) => {
          
        const allTasks = []
        console.log("Initial Task/ToDo Data fetch:", datum.tasks)
        //map changes all unassigned tasks to the first project          
        res.map( (task) => {
          
          // console.log("mapping task:", task)
          if (datum.tasks.length>0 && task.projectID.length<20){
            console.log("changed", task.name, "id:", task.projectID, datum.projects[0]?._id)
            task.projectID = datum.projects[0]._id
            axios.put(`${url}task/${task._id}`, task)
          }
          allTasks.push(task)
          // console.log("alltasks mapped", allTasks)
        } )

        // console.log("tasks populated in the useContext:", tasks)
        
        datum.setTasks(allTasks)
        console.log("tasks in datum:", datum.tasks) 
      })
      .catch(console.err);
  }, [datum.currentProject, datum.tasks])


    return (
        <div>
            <Header />
            <SideNavbar />
            <AdminRouter />
        </div>
    );
};

export default AdminPage;