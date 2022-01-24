import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataContext from './components/Context';
import {useState, useEffect, useContext} from 'react'

import Connection from './Connection'
import axios from 'axios';
import AdminPage from './components/adminComponents/AdminPage';
import FeedbackForm from './components/FeedbackForm';
import AdminRouter from './components/adminComponents/AdminRouter';
import Header from './components/adminComponents/Header';
import LoginModal from './components/LoginModal'
import'./components/adminComponents/todoModal/CSS/editModal.css'
import Modal from "react-bootstrap/Modal";


function App() {

const [devs, setDevs] = useState([])
const [projects, setProjects] = useState([])
const [tasks, setTasks] = useState([])
const [currentProject, setCurrentProject] = useState('')
const [currentTask, setCurrentTask] = useState([])
const [currentEvent, setCurrentEvent] = useState(null)
const [events, setEvents] = useState([])
const [loginCheck, setLoginCheck] = useState(false)
const [allFeedback, setAllFeedback] = useState([])
// const [isAdmin, setIsAdmin] = useState(false)

const url = Connection
const datum = useContext(dataContext)
// const [showLoginModal, setShowLoginModal] = useState(true)
// let isAdmin=false

let showLoginModal=true
let isAdmin = false

  return (
    <div className="App">
      <dataContext.Provider value={{
        devs, setDevs, 
        projects, setProjects, 
        tasks, setTasks, 
        currentProject, setCurrentProject, 
        currentTask, setCurrentTask,
        loginCheck, setLoginCheck,
        currentEvent, setCurrentEvent,
        events, setEvents,
        allFeedback, setAllFeedback
        // isAdmin, setIsAdmin,
        // showLoginModal, setShowLoginModal,
        }}>
          
        {/* <Header /> */}
          
        <body className='main-body'>
          <Header />

          {/* {showLoginModal ===true && <LoginModal 
          showLoginModal={showLoginModal}
          isAdmin={isAdmin}
          />} */}

          
          {isAdmin === false ?
            ( <AdminPage /> ) : 
            ( <FeedbackForm /> )}
          
          
        </body>
         
      </dataContext.Provider>
    </div>
  );
}

export default App;
