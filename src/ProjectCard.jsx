import { useEffect } from "react";

import AOS from "aos";

import projectCover from "./assets/project-cover.png";
import { GitBranch, ArrowSquareIn } from "phosphor-react";

import "aos/dist/aos.css";
import "./project-card.css";

export default function ProjectCard() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 0, delay: 10 });
  }, []);

  return (
    <div
      className="bg-[#f8f8f8] max-w-xs flex flex-col gap-2 p-5 rounded-md border border-gray-300 hover:shadow-md"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg project-title text-slate-800 font-semibold">
          Project Name
        </span>
        <div className="flex items-center gap-2">
          <button>
            <a href="">
              <GitBranch size={25} weight="bold" />
            </a>
          </button>
          <button>
            <a href="">
              <ArrowSquareIn size={25} weight="bold" />
            </a>
          </button>
        </div>
      </div>
      <span className="project-text text-md text-[#666] text-left">
        Project description Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ullam nobis quas, dolore odit eum nemo ipsa sit quod laboriosam ad
        labor.
      </span>
      <img src={projectCover} alt="" />
    </div>
  );
}
