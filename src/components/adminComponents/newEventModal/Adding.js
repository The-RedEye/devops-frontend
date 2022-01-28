import React from 'react';
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
import TodoModal from '../todoModal/TodoModal'
import {AiOutlinePlus} from 'react-icons/ai'

function Adding(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            
            <li className="nav-item" variant="primary" onClick={() => setModalShow(true)}>
                <a id= "headerIcons" className="nav-link m-2" href="#">
                    <AiOutlinePlus size={30}/>
                </a>
            </li>
     

      <TodoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    );
}

export default Adding;