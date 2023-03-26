// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import IconComponent from "./iconComponent";

// Exporting New Task Input Which Is Functional Component As Default
export default function NewTaskInputComponent() {
    // Using Dispatch To Work With Redux
    const dispatch = useDispatch();
    const cds = useSelector(state => state);
    const todos = cds.todos;

    // Creating Ref
    const inputRef = React.createRef();

    // Returning JSX
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!todos.find(item => item.name === inputRef.current.value)) {
                dispatch(actions.addTodo(inputRef.current.value))
            }
            inputRef.current.value = '';
        }} className='todo-app__new-task'>
            <button className='todo-app__new-task-btn'><IconComponent type={'plus'}/></button>
            <input ref={inputRef} className='todo-app__new-task-input' required type="text" placeholder='Add a task'/>
        </form>
    );
}