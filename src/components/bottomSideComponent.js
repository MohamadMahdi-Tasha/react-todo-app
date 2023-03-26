// Codes By Mahdi Tasha
// Importing Part
import NewTaskInputComponent from "./components/newTaskInputComponent";
import TasksHolderComponent from "./components/tasksHolderComponent";
import TaskComponent from "./components/taskComponent";

// Exporting Bottom Side Of App Which Is Functional Component As Default
export default function BottomSideComponent() {
    // Returning JSX
    return(
        <div>
            <NewTaskInputComponent />
            <TasksHolderComponent>
                <TaskComponent name={'test'}/>
            </TasksHolderComponent>
        </div>
    );
}