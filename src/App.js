import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataContext from './components/Context';
import {useState, useEffect, useContext} from 'react'

import Connection from './Connection'
import axios from 'axios';
import AdminPage from './components/adminComponents/AdminPage';

function App() {

const [devs, setDevs] = useState([])
const [projects, setProjects] = useState([])
const [tasks, setTasks] = useState([])
const [currentProject, setCurrentProject] = useState('')
const [currentTask, setCurrentTask] = useState([])
const [isAdmin, setIsAdmin] = useState(false)

const url = Connection
const datum = useContext(dataContext)

// useEffect(() => {
//   //fetches projects
//   fetch(`${url}devops`)
//       .then((res) => res.json())
//       .then((res) => {setProjects(res)
//       console.log("Initial Projects Data fetch:", projects)
//       })
//       .catch(console.err);

//   //fetches users
//   fetch(`${url}user`)
//       .then((res) => res.json())
//       .then((res) => {setDevs(res)
//       console.log("Initial Dev Data fetch:", devs)
//       })
//       .catch(console.err);

//   //fetches tasks
//   fetch(`${url}task`)
//       .then((res) => res.json())
//       .then((res) => {
          
//         const allTasks = []
//         console.log("Initial Task/ToDo Data fetch:", tasks)
//         //map changes all unassigned tasks to the first project          
//         res.map( (task) => {
          
//           // console.log("mapping task:", task)
//           if (tasks.length>0 && task.projectID.length<20){
//             console.log("changed", task.name, "id:", task.projectID, projects[0]?._id)
//             task.projectID = projects[0]._id
//             axios.put(`${url}task/${task._id}`, task)
//           }
//           allTasks.push(task)
//           // console.log("alltasks mapped", allTasks)
//         } )

//         // console.log("tasks populated in the useContext:", tasks)
        
//         setTasks(allTasks)
//         console.log("tasks in datum:", datum.tasks) 
//       })
//       .catch(console.err);
//   }, [currentProject, tasks])

  return (
    <div className="App">
      <dataContext.Provider value={{
        devs, setDevs, 
        projects, setProjects, 
        tasks, setTasks, 
        currentProject, setCurrentProject, 
        currentTask, setCurrentTask,
        isAdmin, setIsAdmin
        }}>
          
        {/* <Header /> */}
          
        <body className='main-body'>
          <AdminPage />

          
        </body>
         
      </dataContext.Provider>
    </div>
  );
}

export default App;
