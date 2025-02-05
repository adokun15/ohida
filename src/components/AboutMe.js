import { motion } from "framer-motion";
import { Database, GitBranch, Laptop } from "lucide-react";
export default function AboutMe() {
  return (
    <motion.section id="aboutMe" className="min-h-[60vh]  py-10">
      <h1 className="lg:text-center md:text-[5rem] text-5xl pr-10 text-slate-100 ">
        Capabilities
      </h1>
      <article className="text-center space-y-3 my-[2rem] text-xl w-[89%] block mx-auto">
        <div className="bg-white py-4 px-2 pb-4 space-y-3 rounded">
          <motion.h2 className="text-4xl my-4">API</motion.h2>
          <Database className="m-auto" />
          <p className="text-balance tracking-wider">
            Ability to populate a website content dynamically by fetching data
            from a RESTful APIs or Nosql Database(Firebase)
          </p>
        </div>

        <div className="bg-white py-4 px-2 pb-4 space-y-3 rounded">
          <motion.h2 className="text-4xl my-4">Responsive UI Design</motion.h2>
          <Laptop className="m-auto" />
          <p className="text-balance tracking-wider">
            Ability to translate design from tools(figma,sketch) into readable
            code and use UI library for better User Experience
          </p>
        </div>

        <div className="bg-white py-4 px-2 pb-4 space-y-3 rounded">
          <motion.h2 className="text-4xl my-4">Version Control</motion.h2>
          <GitBranch className="m-auto" />
          <p className="text-balance tracking-wider">
            Knowledge of Git for version control. Also familiar with Github for
            remote version control
          </p>
        </div>
      </article>
    </motion.section>
  );
}
