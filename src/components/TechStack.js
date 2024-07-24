import htmlImg from "../images/techstack/html.png";
import cssImg from "../images/techstack/css.jpeg";
import jsImg from "../images/techstack/js.png";
import reactImg from "../images/techstack/images.png";
import reduxImg from "../images/techstack/redux-icon-2048x1945-ahvhunxp.png";
import firebaseImg from "../images/techstack/firebase.png";
import gitImg from "../images/techstack/Git-Icon-1788C.png";
import FramerImg from "../images/techstack/framer.png";
import TailWindImg from "../images/techstack/Tailwind_CSS_Logo.svg.png";
export default function TechStack() {
  return (
    <section className="bg-white min-h-[80vh] p-10">
      <h1 className="text-5xl md:text-[5rem] text-pink-500">My TechStack</h1>
      <ul
        className="md:grid *:my-4 *:min-h-24
        md:grid-cols-4 lg:grid-cols-5 md:gap-4 my-5 block md:mx-[5rem] mx-3"
      >
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            src={htmlImg}
            alt="html"
            className="aspect-square block m-auto max-h-[80%]"
          />
          <p className="font-bold text-center text-xl my-4">HTML</p>
        </li>

        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
            src={cssImg}
            alt="css"
          />
          <p className="font-bold text-center text-xl my-4">CSS</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            src={jsImg}
            alt="js"
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
          />
          <p className="font-bold text-center text-xl my-4">JAVASCRIPT</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
            src={reactImg}
            alt="react"
          />
          <p className="font-bold text-center text-xl my-4">REACTJS</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            src={reduxImg}
            alt="redux"
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
          />
          <p className="font-bold text-center text-xl my-4">REDUX</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            src={firebaseImg}
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
            alt="firebase"
          />
          <p className="font-bold text-center text-xl my-4">FIREBASE</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
            src={gitImg}
            alt="GIT"
          />
          <p className="font-bold text-center text-xl my-4">GIT</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            className="aspect-square block m-auto max-w-[90%] max-h-[80%]"
            src={FramerImg}
            alt="Framer"
          />
          <p className="font-bold text-center text-xl my-4">FRAMER</p>
        </li>
        <li className="container bg-white shadow p-5 rounded-2xl">
          <img
            className="aspect-square block m-auto max-w-fill max-h-[80%]"
            src={TailWindImg}
            alt="TailWindImg"
          />
          <p className="font-bold text-center text-xl my-4">TAILWINDCSS</p>
        </li>
      </ul>
    </section>
  );
}
