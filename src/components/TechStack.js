import htmlImg from "../images/techstack/html.png";
import cssImg from "../images/techstack/css.jpeg";
import jsImg from "../images/techstack/js.png";
import reactImg from "../images/techstack/images.png";
import reduxImg from "../images/techstack/redux-icon-2048x1945-ahvhunxp.png";
import firebaseImg from "../images/techstack/firebase.png";
import gitImg from "../images/techstack/Git-Icon-1788C.png";
import nextImg from "../images/techstack/nextjs-icon.png";
import TailWindImg from "../images/techstack/Tailwind_CSS_Logo.svg.png";
export default function TechStack() {
  return (
    <section id="techstack" className=" p-10">
      <h1 className="text-5xl md:text-[5rem] text-slate-100">
        Skills and Tools
      </h1>
      <ul
        className=" grid  py-10 *:my-1 
        grid-cols-3 lg:grid-cols-4  md:w-[70%]  my-5  md:my-2  mx-3"
      >
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              src={htmlImg}
              alt="html"
              className="aspect-square w-full h-full block m-auto "
            />
          </div>
          <p className=" text-center text-xs my-1">HTML</p>
        </li>

        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              className="aspect-square w-full h-full block m-auto "
              src={cssImg}
              alt="css"
            />
          </div>
          <p className=" text-center text-xs my-1">CSS</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              src={jsImg}
              alt="js"
              className="aspect-square w-full h-full block m-auto "
            />
          </div>

          <p className=" text-center text-xs my-1">JAVASCRIPT</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              className="aspect-square w-full h-full block m-auto "
              src={reactImg}
              alt="react"
            />
          </div>
          <p className=" text-center text-xs my-1">REACTJS</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              src={reduxImg}
              alt="redux"
              className="aspect-square w-full h-full block m-auto "
            />
          </div>
          <p className=" text-center text-xs my-1">REDUX</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              src={firebaseImg}
              className="aspect-square w-full h-full block m-auto "
              alt="firebase"
            />
          </div>

          <p className=" text-center text-xs my-1">FIREBASE</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              className="aspect-square w-full h-full block m-auto "
              src={gitImg}
              alt="GIT"
            />
          </div>

          <p className=" text-center text-xs my-1">GIT</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              className="aspect-square w-full h-full block m-auto "
              src={nextImg}
              alt="Framer"
            />
          </div>

          <p className=" text-center text-xs my-1">NextJs</p>
        </li>
        <li className="w-fit p-2 bg-white shadow shadow-slate-400  rounded">
          <div className="h-16 w-16">
            <img
              className="aspect-square block m-auto max-w-fill max-h-[80%]"
              src={TailWindImg}
              alt="TailWindImg"
            />
          </div>

          <p className=" text-center text-xs my-1">TAILWINDCSS</p>
        </li>
      </ul>
    </section>
  );
}
