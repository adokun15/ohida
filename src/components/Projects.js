import { motion } from "framer-motion";

import namifyImg from "../images/projects/Opera Snapshot_2024-10-18_182826_namifyai.vercel.app.png";
import moviedepthImg from "../images/projects/screencapture-moviedepth-web-app-2024-10-18-18_04_10.png";
import sharespaceImg from "../images/projects/Opera Snapshot_2024-10-18_182339_sharespace-rtk-query.vercel.app.png";
import nicroImg from "../images/projects/Opera Snapshot_2024-10-18_181624_nicroelectronics.web.app.png";
import spacebizImg from "../images/projects/Opera Snapshot_2024-10-18_183334_spacebiz.vercel.app.png";
import { ArrowRight, Code2Icon } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "project1",
      name: "Namify",
      description: `An AI wrapper, generate name for different occasion`,
      githubLink: "https://github.com/adokun15/product-name-maker",
      imgDemo: namifyImg,
      tools: "NextJs, OpenAI, Paystack",
      viewLink: "https://namifyai.vercel.app",
    },
    {
      id: "project2",
      name: "MovieDepth",
      description: `A Movie Info Website. Get all information about a movie or series`,
      githubLink: "https://github.com/adokun15/moviedepth",
      imgDemo: moviedepthImg,
      tools: "Firebase, Redux, TMDB APIs, React",
      viewLink: "https://moviedepth.web.app",
    },
    {
      id: "project3",
      name: "ShareSpace",
      description: `A roommate matchup site. For students looking for new roomie. `,
      // githubLink: "https://github.com/adokun15/sharespace",
      imgDemo: sharespaceImg,
      tools: "Firebase, Redux, React, NodeJS, Express, ShadCN, Paystack",
      viewLink: "https://sharespace.com.ng",
    },
    {
      id: "project4",
      name: "Nicro Electronics",
      description: `An e-commerce electronics store`,
      githubLink: "https://github.com/adokun15/nicro",
      imgDemo: nicroImg,
      tools: "Firebase, Redux, React",
      viewLink: "https://nicroelectronics.web.app",
    },
    {
      id: "project5",
      name: "SpaceBiz",
      description: `An sales solution for Whatapps seller.`,
      tools: "Firebase, Whatapp Api, Paystack, Redux, React, NodeJS, Expressjs",
      imgDemo: spacebizImg,
      viewLink: "https://spacebiz.vercel.app/",
    },
  ];

  return (
    <div className=" ">
      <section id="projects" className="  md:p-10 p-2  ">
        <motion.h1 className="lg:text-center md:text-[5rem]  text-5xl text-slate-100">
          Projects
        </motion.h1>
        <article className="block md:mx-[5rem] mx-4 *:my-2 my-10  ">
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className="list-none bg-white shadow rounded-xl p-5"
              >
                <div>
                  <img src={project?.imgDemo} className="" alt="namify ai" />
                </div>
                <div className="space-y-3 px-2">
                  <h1 className="font-semibold text-2xl mb-3">
                    {project.name}
                  </h1>
                  <p>{project.description}</p>
                  <p>Tools: {project?.tools}</p>
                  {project.githubLink && project.viewLink ? (
                    <div className="items-center my-4 text-xl md:flex *:block gap-2">
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href={project.githubLink || ""}
                        className="py-1 w-fit bg-blue-950 text-white rounded px-3"
                      >
                        <Code2Icon />
                      </a>
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href={project.viewLink || ""}
                        className="  text-blue-950"
                      >
                        View Live
                        <ArrowRight className="inline" />
                      </a>
                    </div>
                  ) : (
                    <p className="my-4 font-medium text-xl ">
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href={project.viewLink || ""}
                        className="  text-blue-950"
                      >
                        View Live
                        <ArrowRight className="inline" />
                      </a>
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </article>
      </section>
    </div>
  );
}
