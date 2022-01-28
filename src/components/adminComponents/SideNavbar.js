import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaCog,
  FaPlus,
  FaCheck,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
  BsSearch,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import "../../App.css";
import Today from "../navBar/Today";
import Adding from "../adminComponents/todoModal/Adding";
import Dashboard from "../navBar/Dashboard";
import "./sideNav.css";
import TodoModal from "../adminComponents/todoModal/TodoModal";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import NewEventModal from "./newEventModal/NewEventModal";

function Navbar(props) {
  // const [showLinks, setShowLinks] = useState(false);
  const [unclick, setUnclick] = useState("false");
  const [submenu, setSubmenu] = useState("false");
  const [modalShow, setModalShow] = React.useState(false);
  const [newEventModalShow, setNewEventModalShow] = useState(false)

  const [inactive, setInactive] = useState(false);

  // Menu hide and return button/function??? - Tad

  return (
    <>
      <div className="navFile">
        {/* <div className="navBody"> */}
        <div className={`${inactive ? 'inactive' : 'wrapper'}`}>
          <div className="contain" id="contain">
            <aside>
              {/* wrapper contains sidebar */}
              <div className="sidebar">
                <div className="user">
                    <div onClick={() => setInactive(!inactive)} className="toggleBtn">
                        {inactive ? <AiOutlineMenu /> : <GrClose />}
                    </div>
                {/* <BsFillArrowRightSquareFill /> */}
                  {/* <a href="users">
                    {" "} */}
                    {inactive ? <a href="users">
                    {" "} <img
                      className="navImg"
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="profile pic"
                    />
                  </a> : <a href="users">
                  {" "} <img
                    className="navImg"
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    alt="profile pic"
                    /> 
                </a>
                }
                {inactive ? '' : <h2 className="userName" >John Smith</h2>}
                    {/* <img
                      className="navImg"
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="profile pic"
                    />
                  </a>
                  <h3 className="userName">John Smith</h3> */}
                </div>

                {/* menu items in here */}
                <ul className="list-group">
                  {/* <a href="#" class="list-group-item list-group-item-action active p-3">
                       <MdOutlineSpaceDashboard size={25} className='m-2'/>
                       Dashboard
                    </a> */}
                  {/* isnt working not sure why */}

                  {inactive ? <Link to="/dashboard" className="navsInactive">
                    <MdOutlineSpaceDashboard />
                  </Link> : <Link to="/dashboard" className="navs">
                    <MdOutlineSpaceDashboard />
                    <span className="taskName"> Dashboard</span>
                  </Link>}

                  {inactive ? <Link to="/today" className="navsInactive">
                  <FaRegCalendar />
                  </Link> : <Link to="/today" className="navs">
                    <FaRegCalendar />
                    <span className="taskName"> Today</span>
                  </Link>}

                  {inactive ? <Link to="/upcoming" className="navsInactive">
                    <FaRegCalendarAlt />
                  </Link> : <Link to="/upcoming" className="navs">
                    <FaRegCalendarAlt />
                    <span className="taskName"> Upcoming</span>
                  </Link>}

                  {inactive ? <Link to="/settings" className="navsInactive">
                    <FaCog />
                  </Link> : <Link to="/settings" className="navs">
                    <FaCog />
                    <span className="taskName"> Settings</span>
                  </Link>}

                  {inactive ? <a href="#" className="navsInactive">
                    <FaPlus />
                  </a> : <a href="#" className="navs">
                    <FaPlus />
                    <span className="taskName"> New Project</span>
                  </a>}

                  {inactive ? <Link to="/feedbackCharts" className="navsInactive">
                    <FaCheck />
                  </Link> : <Link to="/feedbackCharts" className="navs">
                    <FaCheck />
                    <span className="taskName"> Feedback Charts</span>
                  </Link>}

                  {inactive ? <Link to="/completed" className="navsInactive">
                    <FaCheck />
                  </Link> : <Link to="/completed" className="navs">
                    <FaCheck />
                    <span className="taskName"> Completed</span>
                  </Link>}

                  {inactive ? <li className="navsInactive" onClick={() => setModalShow(true)}>
                      <AiOutlinePlus />
                  </li> : <li className="navs" onClick={() => setModalShow(true)}>
                      <AiOutlinePlus />
                      <span className="taskName"> Add Task</span>
                  </li>}

                  {inactive ? <li className="navsInactive" onClick={() => setNewEventModalShow(true)}>
                      <AiOutlinePlus />
                  </li> : <li className="navs" onClick={() => setNewEventModalShow(true)}>
                      <AiOutlinePlus />
                      <span className="taskName"> Add Event</span>
                  </li>}

                  <TodoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

                  <NewEventModal
                    show={newEventModalShow}
                    onHide={() => setNewEventModalShow(false)}
                  />
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* <div className="d-flex flex-column vh-50 flex-shrink-0 p-3 text-white bg-dark mt-3">
    <hr/>
    <br />
    <ul class="nav nav-pills flex-column mb-auto">
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><MdOutlineSpaceDashboard size={25}/>  Dashboard</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendar size={22}/>   Today</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendarAlt size={22}/>   Upcoming</span> </a> </li>
    </ul>
</div> */}

      {/* when the screen is regular and isnt clicked the arrow will show to the left and all the nav stuff will show */}
      {/* as the screen gets smaller or the arrow is clicked the arrow will switch to the right and only the nav icons will show */}
      {/* click on the arrow works you just have to add the css */}

      {/* im the side bar */}
      <ul ClassName="navbar">
        {/* stretch goal */}
        {/* <li><FaInbox /> Inbox</li> */}
        {/* brings in tasks due today */}

        {/* brings in upcoming tasks when clicked */}
        {/* <li className="menu" onClick={() => setShowLinks(!showLinks)}>☰</li> */}
      </ul>
      {/* <div className={`projectNav ${submenu ? 'submenu' : ''}`}>
                <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Projects</h2>
                </div> */}
      {/* <ul className="dummyProjects">Projects will be here</ul> */}
      {/* <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Label</h2>
                </div>
                <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Filter</h2>
                </div> */}
      {/* adding the project components will go here I have to add them */}
      {/* </div> */}
    </>
  );
}

export default Navbar;
