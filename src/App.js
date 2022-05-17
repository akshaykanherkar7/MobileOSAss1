import "./App.css";
import { Heading1, Heading2 } from "./components/Heading";
import { List1, List2 } from "./components/List";
function App() {
  return (
    <div className="App">
      <div>
        <Heading1></Heading1>
        <List1></List1>
        <Heading2></Heading2>
        <List2></List2>
      </div>
    </div>
  );
}

export default App;
