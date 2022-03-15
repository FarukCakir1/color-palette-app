import Palette from "./Components/Palette";
import seedColors from "./seedColors";


function App() {
  return (
    <div className="App">
      <Palette {...seedColors[3]}/>
    </div>
  );
}

export default App;
