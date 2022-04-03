import React, { useState, useEffect } from "react";
// Components
import Palette from "./Components/Palette";
// Packages
import { Routes, Route } from "react-router-dom"
import MainPage from "./Components/MainPage";
import seedColors from "./seedColors";
import SingleColorPage from "./Components/SingleColorPage";
import NewPaletteForm from "./Components/NewPaletteForm";


function App() {

  const palettesFromLS = JSON.parse(window.localStorage.getItem("palettes"))
  const [palettes, setPalettes] = useState(palettesFromLS || seedColors)

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }, [palettes])
 
  const addNewPalette =(newPalette) => {
    setPalettes([...palettes, newPalette])
  }

  const deletePalette = (id) => {
    setPalettes(palettes.filter(palette => palette.id !== id))
  }

  return (
    <Routes>
      <Route path="/palette/new" element={<NewPaletteForm  addNewPalette={addNewPalette} palettes={palettes}/>} />
      <Route path="/" element={<MainPage palettes={palettes} deletePalette={deletePalette} />} />
      <Route path="/palette/:id" element={<Palette palettes={palettes}/>} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPage palettes={palettes}/>} />
    </Routes>
  );

}

export default App;
