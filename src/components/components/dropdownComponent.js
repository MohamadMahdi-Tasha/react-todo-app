// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import IconComponent from "./iconComponent";
import '../../scss/components/_dropdowns.scss';

// Exporting Dropdown Component Which Is Functional Component As Default
export default function DropdownComponent({type, children, position}) {
    // Creating state
    const [isOpened, setOpened] = useState(false);

    // Conditional Rendering
    if (type === 'default') {
        return(
            <div className={(position === 'left') ? 'todo-app__dropdown-holder todo-app__dropdown-holder--left' : 'todo-app__dropdown-holder todo-app__dropdown-holder--right'}>
                <button onClick={() => (isOpened) ? setOpened(false) : setOpened(true)} className='todo-app__dropdown-toggler todo-app__dropdown-toggler--without-text'><IconComponent type={'dots'}/></button>
                {(isOpened) ? <ul className='todo-app__dropdown'>{children}</ul> : false}
            </div>
        );
    } else if(type === 'sort') {
        return(
            <div className={(position === 'left') ? 'todo-app__dropdown-holder todo-app__dropdown-holder--left' : 'todo-app__dropdown-holder todo-app__dropdown-holder--right'}>
                <button onClick={() => (isOpened) ? setOpened(false) : setOpened(true)} className='todo-app__dropdown-toggler todo-app__dropdown-toggler--with-text'><IconComponent type={'sort'} />Sort</button>
                {(isOpened)
                    ? <ul className='todo-app__dropdown'>
                            <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'star'} />Importance</button></li>
                            <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'calender'}/>Default</button></li>
                            <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'><IconComponent type={'alphabetical-sort'} />Alphabetical</button></li>
                    </ul>
                    : false
                }
            </div>
        );
    }
}
