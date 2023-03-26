// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import IconComponent from "./iconComponent";

// Exporting New Task Input Which Is Functional Component As Default
export default function NewTaskInputComponent() {
    // Returning JSX
    return(
        <form className='todo-app__new-task'>
            <button className='todo-app__new-task-btn'><IconComponent type={'plus'}/></button>
            <input className='todo-app__new-task-input' required type="text" placeholder='Add a task'/>
        </form>
    );
}