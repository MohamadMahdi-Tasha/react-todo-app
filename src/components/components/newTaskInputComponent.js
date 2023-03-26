// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import { useDispatch } from "react-redux";
import { actions } from "../../store";
import IconComponent from "./iconComponent";

// Exporting New Task Input Which Is Functional Component As Default
export default function NewTaskInputComponent() {
    // Using Dispatch To Work With Redux
    const dispatch = useDispatch();

    // Creating Ref
    const inputRef = React.createRef();

    // Returning JSX
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            dispatch(actions.addTodo(inputRef.current.value))
            inputRef.current.value = '';
        }} className='todo-app__new-task'>
            <button className='todo-app__new-task-btn'><IconComponent type={'plus'}/></button>
            <input ref={inputRef} className='todo-app__new-task-input' required type="text" placeholder='Add a task'/>
        </form>
    );
}