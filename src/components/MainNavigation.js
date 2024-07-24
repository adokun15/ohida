import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useScroll } from "framer-motion";
//import { useEffect, useRef } from "react";

export default function MainNavigation() {
  /* const navRef = useRef();
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll(
    navRef.current
  );

  useEffect(() => {
    console.log("scrollX", scrollX);
    console.log("scrollXpro", scrollXProgress);
    console.log("scrolly", scrollY);
    console.log("scrolypro", scrollYProgress);
  }, [scrollXProgress, scrollX, scrollY, scrollYProgress]);
*/
  return (
    <nav className="flex text-fuchsia-50 bg-[rgba(255,255,255,0.1)] justify-between px-10 py-8  items-center">
      <header className="text-4xl">Ohida_</header>

      <article className="md:flex lg:flex list-none *:first-letter:text-2xl hidden gap-5">
        <li className="">Home</li>
        <li> Project</li>
        <li> About me</li>
        <li> Contact</li>
      </article>

      <div className=" gap-5 text-3xl md:flex lg:flex hidden">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      <button className="md:hidden text-4xl lg:hidden block">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}
