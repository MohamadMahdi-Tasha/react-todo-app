// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting Task Checkbox Component Which Is Functional Component As Default
export default function TaskCheckboxComponent() {
    // Returning JSX
    return(
        <button className='todo-app__task-checkbox'>
            <IconComponent type={'circle'}/>
            {/*<IconComponent type={'checked-circle'}/>*/}
        </button>
    );
}

