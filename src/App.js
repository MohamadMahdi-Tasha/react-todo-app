// Codes By Mahdi Tasha
// Importing Part
import TopSideComponent from "./components/topSideComponent";
import BottomSideComponent from "./components/bottomSideComponent";

// Exporting Whole App Which Is Functional Component As Default
export default function App() {
  // Returning JSX
  return (
    <div>
        <TopSideComponent />
        <BottomSideComponent />
    </div>
  );
}