import { useState } from "react";
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
