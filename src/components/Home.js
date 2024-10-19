import { motion } from "framer-motion";
import myportofolioImage from "../images/Screenshot_20220707-225434~2.png";
import { ArrowDown } from "lucide-react";
import MainNavigation from "./MainNavigation";
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
    <>
      <motion.section
        id="home"
        layout
        className="lg:w-1/2 overflow-hidden  text-slate-200
       h-100vh block  w-full
       
       "
      >
        <MainNavigation />

        <div className="py-[2vh]">
          <motion.div className="flex justify-center">
            <motion.img
              className="h-72 w-72 rounded-full object-cover aspect-square "
              src={myportofolioImage}
              alt="my portofolio"
            />
          </motion.div>
        </div>
        <motion.article className="mt-5 py-5 md:m-0 ">
          <motion.p
            initial={{
              translateX: "100%",
            }}
            animate={{
              translateX: 0,
              transition: {
                delay: 1,
                duration: 1.5,
              },
            }}
            className="md:text-2xl text-[1rem] text-center leading-[4rem] md:leading-none"
          >
            Hi there
          </motion.p>
          <motion.h1
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
            className="lg:text-[4rem] md:text-[4.5rem] text-[2rem] text-center"
          >
            I'm <span className="text-blue-700">Daniel Amos</span>
          </motion.h1>
          <motion.p
            initial={{
              translateX: "100%",
            }}
            animate={{
              translateX: 0,
              transition: {
                delay: 1.9,
                duration: 1.5,
              },
            }}
            className="md:text-2xl text-[1rem] text-center leading-[4rem] md:leading-none"
          >
            A Frontend Web developer
          </motion.p>
        </motion.article>
        <p className="animate-bounce block text-end">
          <ArrowDown />
        </p>
      </motion.section>
    </>
  );
}
