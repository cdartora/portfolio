import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="leading-relaxed text-red-300">Hello, world</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
