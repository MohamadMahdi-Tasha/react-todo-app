// Codes By Mahdi Tasha
// Importing Part
import TopSideComponent from "./components/topSideComponent";
import BottomSideComponent from "./components/bottomSideComponent";
import './scss/global/_index.scss';
import './scss/utils/_index.scss';
import './scss/layout/_todo-app.scss';

// Exporting Whole App Which Is Functional Component As Default
export default function App() {
  // Returning JSX
  return (
    <div className='todo-app'>
        <TopSideComponent />
        <BottomSideComponent />
    </div>
  );
}