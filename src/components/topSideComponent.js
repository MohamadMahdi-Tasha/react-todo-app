// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./components/iconComponent";
import DropdownComponent from "./components/dropdownComponent";

// Exporting Top Side Of App Which Is Functional Component As Default
export default function TopSideComponent() {
    // Returning JSX
    return(
        <div>
            <div>
                <div>
                    <h6>
                        <IconComponent type={'sun'} />
                        My Day
                    </h6>
                    <DropdownComponent type={'default'}>
                        <li><button>Print Items</button></li>
                    </DropdownComponent>
                </div>
                <h6>Sunday,March 26</h6>
            </div>
            <DropdownComponent type={'sort'}/>
        </div>
    );
}
