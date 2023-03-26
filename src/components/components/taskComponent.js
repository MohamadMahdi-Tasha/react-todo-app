// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Exporting Task Component Which Is Functional Component As Default
export default function TaskComponent({name}) {
    // Returning JSX
    return(
        <div>
            <input type="checkbox"/>
            <p>{name}</p>
            <button><IconComponent type={'star'}/></button>
        </div>
    );
}