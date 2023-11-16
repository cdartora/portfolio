import { useEffect } from "react";

import AOS from "aos";

import { GitBranch, ArrowSquareIn } from "phosphor-react";

import "aos/dist/aos.css";
import "./project-card.css";

export default function ProjectCard({
  title,
  ghLink,
  isDemoClickable,
  demoLink,
  text,
  thumbnail,
}) {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 0, delay: 10 });
  }, []);

  return (
    <div
      className="bg-[#f8f8f8] max-w-xs flex flex-col justify-around h-96 gap-2 p-5 rounded-md border border-gray-300 hover:shadow-md"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between">
        <span className="text-md project-title text-slate-800 font-semibold">
          {title}
        </span>
        <div className="flex items-center gap-2">
          <button>
            <a href={ghLink} target="_blank">
              <GitBranch size={25} weight="bold" />
            </a>
          </button>
          {isDemoClickable && (
            <button>
              <a href={demoLink} target="_blank" rel="norefferer">
                <ArrowSquareIn size={25} weight="bold" />
              </a>
            </button>
          )}
        </div>
      </div>
      <span className="self-end project-text text-md text-[#666] text-left">
        {text}
      </span>

      <img src={thumbnail} alt={`${title} thumbnail`} />
    </div>
  );
}
