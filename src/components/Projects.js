//import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "project1",
      name: "Slotin",
      description: `A bank UI that demonstrate real world bank application.
  This stimulate functionality relating to real world application like`,
      githubLink: "https://github.com/adokun15/Slotin",
      viewLink: "https://slotin-bank.web.app",
    },
    {
      id: "project2",
      name: "MovieDepth",
      description: `A bank UI that demonstrate real world bank application.
  This stimulate functionality relating to real world application like `,
      githubLink: "https://github.com/adokun15/moviedepth",
      viewLink: "https://moviedepth.web.app",
    },
    {
      id: "project3",
      name: "Savvy Journal",
      description: `A bank UI that demonstrate real world bank application.
  This stimulate functionality relating to real world application like `,
      githubLink: "https://github.com/adokun15/savvyjournal",
      viewLink: "https://savvyjournal.web.app",
    },
  ];
  return (
    <section className=" to-purple-100 min-h-[80vh] p-10 bg-gradient-to-br from-pink-100 ">
      <h1 className="md:text-[5rem] text-5xl text-pink-500">Project</h1>
      <article className="block md:mx-[5rem] mx-4 *:my-2 md:grid grid-cols-3 my-10 gap-4 ">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="list-none bg-white shadow rounded-xl p-5"
            >
              <div className="px-2">
                <h1 className="font-semibold text-2xl mb-3">{project.name}</h1>
                <p>{project.description}</p>
                <div className="items-center my-4 text-[70%] md:flex *:block gap-2">
                  <a
                    href={project.githubLink || ""}
                    className="py-1 bg-pink-500 text-white rounded px-3"
                  >
                    View Source Code on github
                  </a>
                  <a
                    href={project.viewLink || ""}
                    className="underline text-pink-500"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </article>
    </section>
  );
}
