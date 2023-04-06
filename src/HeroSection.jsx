import { GithubLogo, LinkedinLogo, HandWaving } from "phosphor-react";
import Typewriter from "typewriter-effect";
import heroImage from "./assets/profile-pic.png";
import reactIcon from "./assets/react-icon.png";
import tailwindIcon from "./assets/tailwind-icon.png";
import typescriptIcon from "./assets/typescript-icon.png";
import shape from "./assets/curveAsymmetrical.svg";

export default function HeroSection() {
  return (
    <div className="flex flex-col relative bg-[#F1F4F7]">
      <section className="w-full max-w-7xl bg-[#f8f8f8]">
        <header className="flex items-center justify-between px-3 mb-10">
          <button>
            <h1 className="logo leading-10 font-medium">{"<cdartora />"}</h1>
          </button>
          <div className="flex gap-2">
            <button>
              <a href="https://github.com/cdartora" target="_blank">
                <GithubLogo size={35} />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/carlosdalsoler/"
                target="_blank"
              >
                <LinkedinLogo size={35} />
              </a>
            </button>
          </div>
        </header>
        <div className="hero-title flex flex-col items-center px-12 leading-3">
          <div className="flex items-center gap-2 text-xl">
            <span>Olá</span>
            <HandWaving size={30} className="rotate" weight="bold" />
            <span>Meu nome é</span>
          </div>
          <div className="text-xl font-bold">
            <span>Carlos Dartora,</span>
          </div>
          <div className="text-xl">
            <span>sou um</span>
          </div>
          <div className="text-xl font-bold flex text-center">
            <span>Desenvolvedor Frontend</span>
          </div>
          <div className="text-xl">
            <span>especializado em</span>
          </div>
          <div className="text-xl font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("React.").pauseFor(2500).start();
              }}
            />
          </div>
        </div>
        <div className="hero-image">
          <div className="p-12 relative">
            <img src={heroImage} alt="Uma ilustração de Carlos Dartora." />
            <img
              className="idle-animation absolute w-20 top-7 right-6"
              src={reactIcon}
              alt="Ícone do framework React."
            />
            <img
              className="idle-animation absolute w-20 top-12 left-4"
              src={tailwindIcon}
              alt="Ícone da biblioteca Tailwind CSS."
            />
            <img
              className="idle-animation absolute w-20 bottom-6 left-14"
              src={typescriptIcon}
              alt="Ícone da linguagem Typescript."
            />
          </div>
        </div>
      </section>
      <div class="custom-shape-divider-top-1680746995">
        <img src={shape} alt="" />
      </div>
    </div>
  );
}
