import React, {useState, useContext} from 'react';
import EditModal from '../adminComponents/todoModal/EditModal'
import Connection from '../../Connection'
import dataContext from '../Context';
import { Droppable, Draggable } from "react-beautiful-dnd";
import '../adminComponents/todoModal/CSS/editModal.css'
import Tilt from 'react-parallax-tilt';

const TaskCard = ( {task} ) => {
  const url = Connection
  const datum = useContext(dataContext)
  const [taskEdit, setTaskEdit] = useState(
    {
      name: task.name,
      description: task.description,
      completed: false
  })
 
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Droppable droppableId="cardDrops">
    {(provided) => (
              <div
                className="taskCards"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Tilt className="tilt">
    <Draggable draggableId={task._id}>
    {(provided) => (
    <div class="card" {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}>
    <div class="card-body">
      <h5 class="title">{task.name}</h5>
      <p value= "task.name" class="description">Desc: {task.description}.</p>
      <p> Current Status: {task?.status}</p>
      <p> Developers: 
          <br />
          {task.devs.map( (dev) => {
            return <p>{dev}</p> 
          })}
      </p>
      <p>TaskID: {task._id}</p>
      <div>Due Date: {task.dueDate}</div>
      <hr />
      <button className="button" variant="primary" onClick={() => setModalShow(true)} taskId={task._id}>Edit Task</button>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClick={datum.setCurrentTask(task)}
        taskId={task._id}
        task={task}
        />
      <div>Show Comments</div>
      <span style={{ display: 'none' }}>{provided.placeholder}</span>
    </div>
  </div>
        )}
      </Draggable>
      </Tilt>
      </div>
      )}
      </Droppable>
  </>
  );
};

export default TaskCard;