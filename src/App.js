// Components
import Palette from "./Components/Palette";
// Packages
import { Routes, Route} from "react-router-dom"
import MainPage from "./Components/MainPage";
import seedColors from "./seedColors";
import SingleColorPage from "./Components/SingleColorPage";
import NewPaletteForm from "./Components/NewPaletteForm";


function App() {

  return (
    <Routes>
      <Route path="/palette/new" element={<NewPaletteForm />}/>
      <Route path="/" element={<MainPage palettes={seedColors}/>}/>
      <Route path="/palette/:id" element={<Palette />}/>
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPage />}/>
    </Routes>
  );

}

export default App;
