import "./App.css";
import { Heading1, Heading2 } from "./components/Heading";
import List from "./components/List";
function App() {
  const MobileOS = ["Android", "Blackbery", "iPhone", "Windows Phone"];
  const MobileManFact = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <div>
        <Heading1></Heading1>
        <List data={MobileOS}></List>
        <Heading2></Heading2>
        <List data={MobileManFact}></List>
      </div>
    </div>
  );
}

export default App;
