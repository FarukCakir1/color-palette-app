import React, { useState } from "react";
// Components
import Palette from "./Components/Palette";
// Packages
import { Routes, Route } from "react-router-dom"
import MainPage from "./Components/MainPage";
import seedColors from "./seedColors";
import SingleColorPage from "./Components/SingleColorPage";
import NewPaletteForm from "./Components/NewPaletteForm";


function App() {

  const [palettes, setPalettes] = useState(seedColors)
 
  const addNewPalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  return (
    <Routes>
      <Route path="/palette/new" element={<NewPaletteForm  addNewPalette={addNewPalette} palettes={palettes}/>} />
      <Route path="/" element={<MainPage palettes={palettes} />} />
      <Route path="/palette/:id" element={<Palette palettes={palettes}/>} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPage palettes={palettes}/>} />
    </Routes>
  );

}

export default App;
