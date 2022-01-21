import React, {useState} from 'react';
import TodoForm from '../adminComponents/todoModal/TodoForm'
import AddingTodo from '../bodyComponents/AddingTodo'

function CreatingTasks() {
    const [todos, setTodos] = useState([]);

    // https://stackoverflow.com/questions/41525275/what-does-this-notation-s-testval-mean got this from stack overfolw basically its to prevent extra spacing im not sure why its not working currently

    const addTodos = todo => {
        // if(!todo.test || /^\s*$/.test(todo.text)) {
        //     return;
        // }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todos);
    }

    const completeTodo = id => {
        let updateTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        })
        setTodos(updateTodo)
    }
    return (
        <>
       
        <div>
            {/* Do you need an input field for this button to create task? - Tad */}
        {/* <h1>Adding the Todos</h1> */}
        </div>
        <TodoForm onSubmit={addTodos}/>
        <AddingTodo
        todos={todos}
        completeTodos={completeTodo}
        />
       
        
        </>
    );
}

export default CreatingTasks;