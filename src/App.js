import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataContext from './components/Context';
import {useState, useEffect, useContext} from 'react'

import Connection from './Connection'
import axios from 'axios';
import AdminRouter from './components/adminComponents/AdminRouter';
import LoginModal from './components/LoginModal'
import'./components/adminComponents/todoModal/CSS/editModal.css'
import Modal from "react-bootstrap/Modal";
import Body from './components/Body';


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
const [isAdmin, setIsAdmin] = useState(false)
const [chartData, setChartData] = useState({})
const [showThankYouModal, setShowThankYouModal] = useState(false)
const [comments, setComments] = useState([])

const url = Connection
const datum = useContext(dataContext)
const [showLoginModal, setShowLoginModal] = useState(true)

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
        allFeedback, setAllFeedback,
        isAdmin, setIsAdmin,
        chartData, setChartData,
        showThankYouModal, setShowThankYouModal,
        comments, setComments
        // showLoginModal, setShowLoginModal,
        }}>
          
          {showLoginModal ===true && <LoginModal 
            showLoginModal={showLoginModal} 
            setShowLoginModal={setShowLoginModal}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            loginCheck={loginCheck}
            setLoginCheck={setLoginCheck}
          />}

          {loginCheck === true && <Body />}

         
      </dataContext.Provider>
    </div>
  );
}

export default App;
