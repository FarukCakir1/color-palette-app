// Components
import Palette from "./Components/Palette";
// Packages
import { Routes, Route} from "react-router-dom"
import MainPage from "./Components/MainPage";
import seedColors from "./seedColors";


function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage palettes={seedColors}/>}/>
      <Route path="/palette/:id" element={<Palette />}/>
    </Routes>
  );

}

export default App;
