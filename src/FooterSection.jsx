import {
  MapTrifold,
  Binoculars,
  Files,
  Phone,
  ArrowSquareOut,
} from "phosphor-react";

export default function FooterSection() {
  return (
    <div className="flex justify-center relative bg-[#f8f8f8] text-slate-800">
      <div className="curve-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="w-full flex flex-col justify-start items-center projects text-center max-w-3xl px-4">
        <div className="w-full flex my-20 items-start">
          <div className="flex flex-col items-center gap-4 w-1/2 px-2">
            <span className="project-title font-semibold">Sobre Mim</span>
            <div className="flex flex-col gap-2 items-start text-sm w-full">
              <div className="project-text flex items-center gap-2">
                <MapTrifold size={30} weight="bold" />
                <span>Porto Alegre / RS</span>
              </div>
              <div className="project-text flex items-center gap-2">
                <Binoculars size={30} weight="bold" />
                <span>21 anos</span>
              </div>
              <div className="project-text flex items-center gap-2">
                <Files size={30} weight="bold" />
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-gray-950"
                >
                  <a
                    href="https://docs.google.com/document/d/1Ppt6AHJSOEzcU8M30ftV3oNEDdqKEHrer_RANrGV4AQ/edit?usp=sharing"
                    target="_blank"
                  >
                    currículo
                  </a>
                  <ArrowSquareOut size={20} weight="bold" />
                </button>
              </div>
              <div className="project-text flex items-center gap-2">
                <Phone size={30} weight="bold" />
                <span>(51) 99270-6047</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-1/2 px-2">
            <span className="project-title font-semibold">Portfolio</span>
            <div className="flex flex-col gap-2 items-start text-sm w-full">
              <div className="project-text">
                <a href="#home">início</a>
              </div>
              <div className="project-text">
                <a href="#projects">projetos</a>
              </div>
              <div className="project-text">
                <a href="#contact">contato</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-title absolute bottom-0 font-semibold">
          © 2023 Carlos Dartora
        </div>
      </section>
    </div>
  );
}
