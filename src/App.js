// Components
import Palette from "./Components/Palette";
// Packages
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>}/>
      <Route path="/palette/:id" element={<Palette />}/>
    </Routes>
  );

}

export default App;
