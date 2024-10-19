import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Root() {
  return (
    <main className="lg:flex lg:h-screen relative to-slate-900 bg-gradient-to-br from-slate-700">
      <Home />
      <div className="lg:overflow-y-scroll lg:w-1/2">
        <Projects />
        <AboutMe />
        <TechStack />
        <ContactMe />
      </div>
    </main>
  );
}
