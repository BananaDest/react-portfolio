import { motion } from "framer-motion";

import SkillPill from "../Shared/SkillPill";

import { IProject } from "../Interfaces/IProject";

const Project = () => {
  const projectList: IProject[] = [
    {
      id: "1",
      name: "Portfolio",
      githubLink: "https://github.com/jdstar1922/react-portfolio",
      //hostingLink: "https://github.com/jdstar1922/react-portfolio",
      summary:
        "Basic web portfolio created in ReactJS made to organize and show my projects and practice React.",
      description: "",
      skills: [
        { id: 1, group: "frontend", name: "React" },
        { id: 2, group: "frontend", name: "Typescript" },
        { id: 34, group: "others", name: "UX/UI" },
        { id: 7, group: "frontend", name: "TailwindCSS" },
        { id: 17, group: "general", name: "Unit testing" },
        { id: 13, group: "general", name: "Git & Github" },
      ],
    },
  ];

  return (
    <motion.div
      className="flex max-h-screen w-full flex-col space-y-10 overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="m-auto mt-28 font-mono text-6xl font-bold text-chestnut-700">
        Project
      </h1>
      <ul className="m-auto flex w-3/4 justify-center space-x-10">
        {projectList.map((project) => {
          return (
            <li
              className={
                "mt-4 aspect-[6/5] w-[25vw] rounded-2xl border border-chestnut bg-cordovan-100 text-center font-bold text-white"
              }
              key={project.id}
            >
              <div className="m-auto flex flex-col space-y-3 p-10">
                <h1 className="min-h-[3vh] text-left font-mono text-xl font-bold text-chestnut-700">
                  {project.name}
                </h1>
                <p className="max-w-[100vh] text-wrap text-left text-sm text-white ">
                  {project.summary}
                </p>
                <p className="max-w-[100vh] self-start text-sm text-white ">
                  repo: <a href={project.githubLink}>github</a>
                </p>
                <p className="max-w-[100vh] self-start text-sm text-white ">
                  Visit:{" "}
                  {project.hostingLink ? (
                    <a href={project.hostingLink}>{project.hostingLink}</a>
                  ) : (
                    "Not Hosted"
                  )}
                </p>

                <div className="flex max-h-full w-full flex-col space-y-10 overflow-hidden ">
                  <ul className="mt-1 flex w-full flex-wrap justify-start">
                    {project.skills.map((skill) => {
                      return (
                        <SkillPill
                          key={skill.id}
                          skill={skill}
                          size={"small"}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Project;
