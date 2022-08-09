import logo from "./logo.svg";
import "./App.css";
import "./ParentComponent";
import { ParentComponent } from "./ParentComponent";
import WrapperComponent from "./WrapperComponent";

function App() {
  const sayHello = () => {};
  const x = 10;
  const user = {
    name: "mariam",
    lastName: "liparteliani",
    age: 24,
    link: "https://www.youtube.com/",
  };
  return (
    <div>
      <ParentComponent />
      <WrapperComponent />
    </div>
  );
}

export default App;
