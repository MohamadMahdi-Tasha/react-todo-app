// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "./iconComponent";
import TaskCheckboxComponent from "./taskCheckboxComponent";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Creating Refs
    const inputRef = React.createRef();
    const taskRef = React.createRef();

    // Handling Events
    function handleChangeOfInput() {
        const input = inputRef.current;
        const task = taskRef.current;

        console.log(input.value[0], input.value)

        if (input.value.startsWith('') || input.value === '') {
            task.remove()
        }
    }

    // Returning JSX
    return(
        <div className='todo-app__task' ref={taskRef}>
            <TaskCheckboxComponent />
            <input onChange={handleChangeOfInput} ref={inputRef} type="text" defaultValue={name} className='todo-app__task-input' />
            <button className='todo-app__task-star-btn'><IconComponent type={'star'}/></button>
        </div>
    );
}