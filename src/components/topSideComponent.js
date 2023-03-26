// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./components/iconComponent";
import DropdownComponent from "./components/dropdownComponent";
import { useSelector } from "react-redux";
import '../scss/layout/_top-side.scss';

// Exporting Top Side Of App Which Is Functional Component As Default
export default function TopSideComponent() {
    // Using Hooks
    const state = useSelector(store => store);
    const dateState = state.date;

    // Returning JSX
    return(
        <div className='todo-app__top-side'>
            <div className='todo-app__top-left-side'>
                <div className='todo-app__top-title-holder'>
                    <h6 className='todo-app__top-side-title'>
                        <IconComponent type={(dateState.isDay) ? 'sun' : 'moon'} />
                        My {(dateState.isDay) ? 'Day' : 'Night'}
                    </h6>
                    <DropdownComponent position={'left'} type={'default'}>
                        <li className='todo-app__dropdown-li'><button className='todo-app__dropdown-btn'>Print Items</button></li>
                    </DropdownComponent>
                </div>
                <h6 className='todo-app__top-date'>{dateState.dayOfWeek},{dateState.monthName} {dateState.day}</h6>
            </div>
            <DropdownComponent position={'right'} type={'sort'}/>
        </div>
    );
}
