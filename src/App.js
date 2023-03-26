// Codes By Mahdi Tasha
// Importing Part
import TopSideComponent from "./components/topSideComponent";
import NewTaskInputComponent from "./components/components/newTaskInputComponent";

// Exporting Whole App Which Is Functional Component As Default
export default function App() {
  // Returning JSX
  return (
    <div>
        <TopSideComponent />
        <NewTaskInputComponent />
    </div>
  );
}