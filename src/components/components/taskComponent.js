// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Returning JSX
    return(
        <div className='todo-app__task'>
            <input className='todo-app__task-checkbox' type="checkbox"/>
            <p className='todo-app__task-title'>{name}</p>
            <button className='todo-app__task-star-btn'><IconComponent type={'star'}/></button>
        </div>
    );
}