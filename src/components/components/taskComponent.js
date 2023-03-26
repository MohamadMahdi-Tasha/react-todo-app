// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";
import TaskCheckboxComponent from "./taskCheckboxComponent";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Returning JSX
    return(
        <div className='todo-app__task'>
            <TaskCheckboxComponent />
            <input type="text" defaultValue={name} className='todo-app__task-input' />
            <button className='todo-app__task-star-btn'><IconComponent type={'star'}/></button>
        </div>
    );
}