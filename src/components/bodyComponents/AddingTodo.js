import React, {useState, useEffect} from 'react';
import TodoForm from '../adminComponents/todoModal/TodoForm'
import dataContext from '../Context';
import { Axios } from 'axios';
// const url = "http://localhost:4000/devops/"
// const url = "http://localhost:4000/user/"
// const url = "http://localhost:4000/task/"

function AddingTodo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        value: ''
    })
    const [task, setTask] = useState([])
    
    // const [dev, setDev] = useState([])

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((res) => {setDev(res)
    //         console.log("Dev Data:", dev);
    //         })
    //         .catch(console.err);
    //     }, [])

    return todos.map((todo, index) => (
        <>
            {/* <div className={todo.isComplete ? 'todoComplete' : 'addingTodo'} key={index}>
            
            <div key={todo.name} onClick={() => completeTodo(todo.text)}>
            {todo.text}
            </div>

            </div> */}
        </>
    ));
}

export default AddingTodo;