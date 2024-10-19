import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainNavigation() {
  return (
    <nav className=" bg-[rgba(0,0,0,0.2)] z-20 w-full  text-slate-300  px-10 py-2 ">
      <div className="flex justify-between items-center">
        <header className="text-4xl">Ohida_</header>

        <div className=" md:gap-5 gap-7 md:text-3xl text-xl flex">
          <a
            target="_blank"
            without
            rel="noreferrer"
            href="https://github.com/adokun15/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            without
            rel="noreferrer"
            href="https://www.linkedin.com/in/daniel-amos-ohida/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            without
            rel="noreferrer"
            href="https://x.com/His_Name_isDan/"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </nav>
  );
}
