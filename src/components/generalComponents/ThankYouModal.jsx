import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ThankYouModal = ( props ) => {

   

    return (
    <>
    <center className="editModals">
        
        <div className="editModalHeader">
            Thank You
        </div>

        <div className="editModalBody">
            Thank You for your Feedback
        </div>

        <div className="editModalFooter">      
            <button className="eventButton" onClick={props.hideModal}> X </button>
        </div>

    </center> 
      
    </>
    );
};

export default ThankYouModal;