// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./components/iconComponent";
import DropdownComponent from "./components/dropdownComponent";
import { useSelector } from "react-redux";

// Exporting Top Side Of App Which Is Functional Component As Default
export default function TopSideComponent() {
    // Using Hooks
    const state = useSelector(store => store);
    const dateState = state.date;

    // Returning JSX
    return(
        <div>
            <div>
                <div>
                    <h6>
                        <IconComponent type={(dateState.isDay) ? 'sun' : 'moon'} />
                        My {(dateState.isDay) ? 'Day' : 'Night'}
                    </h6>
                    <DropdownComponent type={'default'}>
                        <li><button>Print Items</button></li>
                    </DropdownComponent>
                </div>
                <h6>{dateState.dayOfWeek},{dateState.monthName} {dateState.day}</h6>
            </div>
            <DropdownComponent type={'sort'}/>
        </div>
    );
}
