import { BrowserRouter } from "react-router-dom";
import Components from "./components/Components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Components />
      </BrowserRouter>
    </div>
  );
}

export default App;
