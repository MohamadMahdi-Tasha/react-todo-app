// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting Dropdown Component Which Is Functional Component As Default
export default function DropdownComponent({type, children}) {
    // Conditional Rendering
    if (type === 'default') {
        return(
            <div className='todo-app__dropdown-holder'>
                <button className='todo-app__dropdown-toggler'><IconComponent type={'dots'}/></button>
                <ul className='todo-app__dropdown'>{children}</ul>
            </div>
        );
    } else if(type === 'sort') {
        return(
            <div className='todo-app__dropdown-holder'>
                <button className='todo-app__dropdown-toggler'><IconComponent type={'sort'} />Sort</button>
                <ul className='todo-app__dropdown'>
                    <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'star'} />Importance</button></li>
                    <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'calender'}/>Default</button></li>
                    <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'alphabetical-sort'} />Alphabetical</button></li>
                </ul>
            </div>
        );
    }
}
