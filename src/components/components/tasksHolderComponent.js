// Codes By Mahdi Tasha
// Exporting Tasks Holder Component Which Is Functional Component As Default
export default function TasksHolderComponent({children}) {
    // Returning JSX
    return(
        <ul className='todo-app__tasks-holder'>{children}</ul>
    );
}