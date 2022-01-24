import React, {useContext, useEffect} from 'react';
import dataContext from './Context';
import Modal from "react-bootstrap/Modal";
import { Button } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./loginModal.css"



const Login = (props) => {

    const datum = useContext(dataContext)

    function hideModal(){
        console.log("loginCheck", datum.loginCheck, "showLoginModal", props.setLoginModal, "IsAdmin?", datum.isAdmin)
        datum.setloginCheck(true)
        props.setShowLoginModal=false
        console.log("loginCheck", datum.loginCheck, "showLoginModal", props.setLoginModal, "IsAdmin?", datum.isAdmin)
    }

    function isAdmin() {
        props.setIsAdmin = true
        console.log("IsAdmin?", props.isAdmin)
        hideModal()
    }


    return (
        <div classname="modalBG">

        <p>-----</p><p>-----</p><p>-----</p>
        <p>-----</p><p>-----</p><p>-----</p>
        

        <center className="editModals">
             <div className="LoginContainer">
                 <div className="editModalHeader">
                     Admin Authorization
                 </div>

                 <div className="editModalBody">
                     Do you wish to Log In as an Admin?
                 </div>

                 <div className="editModalFooter">
                 <button className="loginButton" onClick={isAdmin}> Yes, I'm an Admin </button>
                 <button className="loginButton" onChick={hideModal}> No, I'm not an Admin </button>
                 </div> 

            </div>
        </center> 

        
        {/* <Modal
          show={answered}
          size="m"
          className="editModals"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >

          <Modal.Header className="editModalHeader" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Admin Login</Modal.Title>
          </Modal.Header>

            <Modal.Body className="editModalBody">
                <h2>Log in as Admin?</h2>                
            </Modal.Body>

            <Modal.Footer className="editModalFooter">
                <button onClick={isAdmin()}>Yes, login as admin</button>
                <button onClick={props.onHide()}>No, login general user</button>
            </Modal.Footer>
        </Modal>  */}
        </div>
    );
};

export default Login;