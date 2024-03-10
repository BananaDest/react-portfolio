import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsAt } from "react-icons/bs";

const Main = () => {
  return (
    <motion.div
      className="m-auto max-w-[1200px] space-y-5 overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mt-48 font-mono text-6xl font-bold text-chestnut-700">
        Fabian Mena
      </h1>
      <p className="max-w-[100vh] text-wrap text-xl text-white">
        Software engineer working in full stack development. Passionate about
        data science, Linux, system administration, devops and automation,
        networking, UX/UI and general Engineering.
      </p>
      <p className="max-w-[100vh] text-wrap text-xl text-white">
        Also likes gaming, guitar, piano, volleyball, Home servers, Physics and
        Science and swords.
      </p>
      <div className="flex space-x-3">
        <a href="https://www.linkedin.com/in/fabi%C3%A1n-mena-garro-b25233202/">
          <BsLinkedin size={30} color="#FBFBFB" />
        </a>
        <a href="https://github.com/jdstar1922">
          <BsGithub size={30} color="#FBFBFB" />
        </a>
        <a href="mailto:famega12@gmail.com">
          <BsAt size={30} color="#FBFBFB" />
        </a>
      </div>
    </motion.div>
  );
};

export default Main;
