import "./App.css";

import { GithubLogo, LinkedinLogo } from "phosphor-react";

function App() {
  return (
    <div className="flex flex-col">
      <section className="w-full max-w-7xl bg-amber-700">
        <header className="flex items-center justify-between px-3">
          <button>
            <h1 className="logo leading-10 font-medium">{"<cdartora />"}</h1>
          </button>
          <div className="flex gap-2">
            <button>
              <GithubLogo size={35} />
            </button>
            <button>
              <LinkedinLogo size={35} />
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}

export default App;
