import { useState } from "react";
import "./App.css";
import { BookmarkSimple } from "phosphor-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="leading-relaxed text-red-300">Hello, world</h1>
      <div className="flex">
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <BookmarkSimple size={32} weight="fill" />
      </div>
    </div>
  );
}

export default App;
