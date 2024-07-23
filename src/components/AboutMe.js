import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <motion.section className="min-h-[60vh] bg-white py-10">
      <h1 className="text-[5rem] pr-10 text-pink-500">About Me</h1>
      <article className="text-center my-[1rem] text-xl leading-10">
        <motion.p>
          With Over 2 year of Experience, I hava honed my skill in various
          programming
        </motion.p>
        <p>
          language and frameworks. My journey has taken me from small startups
          to large enterprise,
        </p>
        <p>
          always striving to to stay ahead of the curve in the fast-evolving
          world of technology
        </p>
      </article>
    </motion.section>
  );
}
