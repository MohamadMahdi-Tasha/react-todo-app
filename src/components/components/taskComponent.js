// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/index";
import React from "react";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Using Hooks
    const dispatch = useDispatch();
    const cds = useSelector(state => state);
    const todos = cds.todos;
    const itemToChange = todos.find(item => item.name === name)

    // Creating Ref
    const inputRef = React.createRef();

    // Handling Events
    function handleClickOfCheckBtnWhileDone() {dispatch(actions.removeDone(name))}
    function handleClickOfCheckBtnWhileNotDone() {dispatch(actions.addDone(name))}
    function handleClickOfCheckBtnWhileImportant() {dispatch(actions.removeImportant(name))}
    function handleClickOfCheckBtnWhileNotImportant() {dispatch(actions.addImportant(name))}
    function handleChangeOfInput() {
        dispatch(actions.changeName({
            name: name,
            changeTo: inputRef.current.value
        }
    ))}

    // Returning JSX
    return(
        <div className='todo-app__task'>
            <button className='todo-app__task-check-btn' onClick={(itemToChange.isDone) ? handleClickOfCheckBtnWhileDone : handleClickOfCheckBtnWhileNotDone}><IconComponent type={(itemToChange.isDone) ? 'checked-circle' : 'circle'}/></button>
            <input ref={inputRef} onChange={handleChangeOfInput} type="text" defaultValue={name} className='todo-app__task-input' />
            <button className='todo-app__task-star-btn' onClick={(itemToChange.isImportant) ? handleClickOfCheckBtnWhileImportant : handleClickOfCheckBtnWhileNotImportant}><IconComponent type={'star'} isFilled={(itemToChange.isImportant) ? true : false}/></button>
            <button className='todo-app__task-delete-btn' onClick={() => dispatch(actions.removeTodo(name))}><IconComponent type={'delete'}/></button>
        </div>
    );
}