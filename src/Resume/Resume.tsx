import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      className="flex w-full flex-col space-y-10 overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="m-auto mt-48 font-mono text-6xl font-bold text-chestnut-700">
        Resume
      </h1>
      <a
        href="../assets/CurriculumFabianMena.pdf"
        download
        className="m-auto flex min-w-36 rounded-3xl border border-chestnut bg-cordovan-300 px-16 py-3 text-white transition hover:bg-cordovan-500"
      >
        <span className="m-auto">Download</span>
      </a>
    </motion.div>
  );
};

export default Resume;
