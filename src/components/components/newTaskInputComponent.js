// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting New Task Input Which Is Functional Component As Default
export default function NewTaskInputComponent() {
    // Returning JSX
    return(
        <div>
            <button><IconComponent type={'plus'}/></button>
            <form action="#"><input type="text" placeholder='Add a task'/></form>
        </div>
    );
}