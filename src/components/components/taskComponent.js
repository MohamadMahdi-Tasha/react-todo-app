// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "./iconComponent";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Returning JSX
    return(
        <div className='todo-app__task'>
            <button className='todo-app__task-check-btn'>
                <IconComponent type={'circle'}/>
            </button>
            <input type="text" defaultValue={name} className='todo-app__task-input' />
            <button className='todo-app__task-star-btn'>
                <IconComponent type={'star'}/>
            </button>
            <button className='todo-app__task-delete-btn'>
                <IconComponent type={'delete'}/>
            </button>
        </div>
    );
}