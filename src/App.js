import Palette from "./Components/Palette";
import seedColors from "./seedColors";
import { createPalette } from "./Helpers/ShadeGenerator";


function App() {
  console.log(createPalette(seedColors[2]));
  return (
    <div className="App">
      <Palette palette = {createPalette(seedColors[2])}/>
    </div>
  );
}

export default App;
