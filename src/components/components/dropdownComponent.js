// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting Dropdown Component Which Is Functional Component As Default
export default function DropdownComponent({type, children}) {
    // Conditional Rendering
    if (type === 'default') {
        return(
            <div>
                <button><IconComponent type={'dots'}/></button>
                <ul>{children}</ul>
            </div>
        );
    } else if(type === 'sort') {
        return(
            <div>
                <button><IconComponent type={'sort'} />Sort</button>
                <ul>
                    <li><button><IconComponent type={'star'} />Importance</button></li>
                    <li><button><IconComponent type={'calender'}/>Default</button></li>
                    <li><button><IconComponent type={'alphabetical-sort'} />Alphabetical</button></li>
                </ul>
            </div>
        );
    }
}
