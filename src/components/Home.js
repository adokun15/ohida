import { motion } from "framer-motion";
import myportofolioImage from "../images/Screenshot_20220707-225434~2.png";
export default function Home() {
  /*  const containerTextMotion = {
    slideIn: {
      translateX: 0,
      transition: {
        delay: 0.9,
        staggerChildren: 0.5,
        duration: 1.5,
      },
    },
    slideOut: {
      translateX: "100%",
    },
  };

  const MaintextMotion = {
    slideOut: {
      translateX: "100%",
    },
    slideIn: {
      translateX: 0,
    },
  };
*/
  return (
    <motion.section
      layout
      className="overflow-hidden bg-grad_color text-white lg:min-h-[80vh] md:min-h-[50vh] min-h-[85vh] md:my-[10vh] my-[5vh] lg:flex block  w-full "
    >
      <div className="lg:w-[50%]">
        <motion.div className="flex justify-center">
          <motion.img
            className="h-72 w-72 rounded-full object-cover aspect-square "
            src={myportofolioImage}
            alt="my portofolio"
          />
        </motion.div>
      </div>
      <motion.article className="lg:w-1/2 mt-5 md:m-0 ">
        <motion.h1
          initial={{
            translateX: "100%",
          }}
          animate={{
            translateX: 0,
            transition: {
              delay: 0.9,
              duration: 1.5,
            },
          }}
          className="lg:text-[9rem] md:text-[4.5rem] text-[2rem] text-center"
        >
          Hi there,
        </motion.h1>
        <motion.p
          initial={{
            translateX: "100%",
          }}
          animate={{
            translateX: 0,
            transition: {
              delay: 1.4,
              duration: 1.5,
            },
          }}
          className="md:text-2xl text-[1rem] text-center leading-[4rem] md:leading-none"
        >
          I'm Daniel Amos, A Frontend Web developer
        </motion.p>
      </motion.article>
    </motion.section>
  );
}
