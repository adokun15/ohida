import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainNavigation() {
  return (
    <nav className="flex text-fuchsia-50 justify-between px-10 py-8 items-center">
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
