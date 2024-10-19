import { motion, AnimatePresence } from "framer-motion";
export default function Modal({ isOpened }) {
  return (
    <AnimatePresence popLayout initial={false}>
      {isOpened && (
        <motion.div
          initial={{ y: 0 }}
          key="modal"
          className="list-none w-full  "
          animate={{ y: 10, opacity: 1, position: "absolute" }}
          exit={{ y: 0, opacity: 0 }}
        >
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
