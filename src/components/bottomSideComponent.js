// Codes By Mahdi Tasha
// Importing Part
import { useSelector } from "react-redux";
import NewTaskInputComponent from "./components/newTaskInputComponent";
import TasksHolderComponent from "./components/tasksHolderComponent";
import TaskComponent from "./components/taskComponent";
import '../scss/layout/_bottom-side.scss';

// Exporting Bottom Side Of App Which Is Functional Component As Default
export default function BottomSideComponent() {
    // Using Hooks
    const state = useSelector(state => state);

    // Returning JSX
    return(
        <div className='todo-app__bottom-side'>
            <NewTaskInputComponent />
            <TasksHolderComponent>
                {
                    state.todos.map(item => (
                        <li key={state.todos.indexOf(item)}>
                            <TaskComponent name={item.name} />
                        </li>
                    ))
                }
            </TasksHolderComponent>
        </div>
    );
}