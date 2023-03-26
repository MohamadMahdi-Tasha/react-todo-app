// Codes By Mahdi Tasha
// Importing Part
import NewTaskInputComponent from "./components/newTaskInputComponent";
import TasksHolderComponent from "./components/tasksHolderComponent";
import TaskComponent from "./components/taskComponent";
import '../scss/layout/_bottom-side.scss';

// Exporting Bottom Side Of App Which Is Functional Component As Default
export default function BottomSideComponent() {
    // Returning JSX
    return(
        <div className='todo-app__bottom-side'>
            <NewTaskInputComponent />
            <TasksHolderComponent>
                <TaskComponent name={'test'}/>
            </TasksHolderComponent>
        </div>
    );
}