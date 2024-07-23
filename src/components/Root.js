import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Root() {
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <TechStack />
      <ContactMe />
    </>
  );
}
