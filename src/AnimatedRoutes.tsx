import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Main from "./Main/Main";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
