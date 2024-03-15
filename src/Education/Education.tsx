import { motion } from "framer-motion";

import SkillPill from "../Shared/SkillPill";
import { IEducation } from "../Interfaces/IEducation";

const Education = () => {
  const educationList: IEducation[] = [
    {
      id: "1",
      title: "Bachelor in software Engineering",
      organization: "ULACIT",
      dateRange: "2021 - 2025",
      skills: [
        { id: 3, group: "frontend", name: "JS" },
        { id: 4, group: "backend", name: "NodeJS" },
        { id: 8, group: "backend", name: "Python" },
        { id: 10, group: "backend", name: "SQL" },
        { id: 12, group: "backend", name: "NoSQL" },
        { id: 24, group: "general", name: "Java" },
        { id: 25, group: "general", name: "C#" },
        { id: 32, group: "data", name: "Data Analysis" },
        { id: 33, group: "servers", name: "Networking" },
        { id: 37, group: "servers", name: "CiberSecurity" },
      ],
    },
    {
      id: "3",
      title: "React Basic & Intermediate",
      organization: "Frontend Master",
      dateRange: "2024",
      skills: [
        { id: 1, group: "frontend", name: "React" },
        { id: 2, group: "frontend", name: "Typescript" },
        { id: 7, group: "frontend", name: "TailwindCSS" },
        { id: 5, group: "backend", name: "Rest APIs" },
        { id: 17, group: "general", name: "Unit testing" },
        { id: 34, group: "others", name: "UX/UI" },
      ],
    },
    {
      id: "2",
      title: "High School Level Software Technician",
      organization: "CEDES Don Bosco",
      dateRange: "2015 - 2020",
      skills: [
        { id: 3, group: "frontend", name: "JS" },
        { id: 4, group: "backend", name: "NodeJS" },
        { id: 10, group: "backend", name: "SQL" },
        { id: 12, group: "backend", name: "NoSQL" },
        { id: 25, group: "general", name: "C#" },
        { id: 33, group: "servers", name: "Networking" },
        { id: 19, group: "backend", name: "MongoDB" },
        { id: 25, group: "general", name: "C#" },
        { id: 13, group: "general", name: "Git & Github" },
      ],
    },
  ];

  return (
    <motion.div
      className="flex max-h-screen w-full flex-col space-y-10 lg:overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="m-auto mt-24 font-mono text-4xl font-bold text-chestnut-700 lg:mt-28 lg:text-6xl">
        Education
      </h1>
      <ul className="m-auto flex flex-col items-center justify-center lg:w-3/4 lg:flex-row lg:space-x-10">
        {educationList.map((education) => {
          return (
            <li
              className={
                "mt-4 w-[75vw] rounded-2xl border border-chestnut bg-cordovan-100 text-center font-bold text-white lg:aspect-[4/4] lg:w-[25vw]"
              }
              key={education.id}
            >
              <div className="m-auto flex flex-col space-y-3 p-10">
                <h1 className="text-left font-mono text-xl font-bold text-chestnut-700">
                  {education.title}
                </h1>
                <p className="max-w-[100vh] self-start text-wrap text-sm text-white ">
                  {education.organization}
                </p>
                <p className="max-w-[100vh] self-start text-wrap text-sm text-white ">
                  {education.dateRange ?? "Current"}
                </p>
                <div className="flex max-h-full w-full flex-col space-y-10 overflow-hidden ">
                  <ul className="mt-1 flex w-full flex-wrap justify-start">
                    {education.skills.map((skill) => {
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

export default Education;
