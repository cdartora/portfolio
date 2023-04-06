import "./App.css";

import { GithubLogo, LinkedinLogo, HandWaving } from "phosphor-react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="flex flex-col">
      <section className="w-full max-w-7xl bg-amber-700">
        <header className="flex items-center justify-between px-3 mb-10">
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
        <div className="hero-title flex flex-col items-center px-12 leading-3">
          <div className="flex items-center gap-2 text-2xl">
            <span>Olá</span>
            <HandWaving size={30} className="rotate" weight="bold" />
            <span>Meu nome é</span>
          </div>
          <div className="text-2xl font-bold">
            <span>Carlos Dartora,</span>
          </div>
          <div className="text-2xl">
            <span>sou um</span>
          </div>
          <div className="text-2xl font-bold flex text-center">
            <span>Desenvolvedor Frontend</span>
          </div>
          <div className="text-2xl">
            <span>especializado em</span>
          </div>
          <div className="text-2xl font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("React.").pauseFor(2500).start();
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
