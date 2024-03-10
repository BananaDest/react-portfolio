import { motion } from "framer-motion";
import { ISkill } from "../Interfaces/ISkill";

import SkillPill from "../Shared/SkillPill";

const Skills = () => {
  const skillList: ISkill[] = [
    { id: 1, group: "frontend", name: "React" },
    { id: 2, group: "frontend", name: "Typescript" },
    { id: 3, group: "frontend", name: "Javascript" },
    { id: 4, group: "backend", name: "Node JS" },
    { id: 5, group: "backend", name: "Rest APIs" },
    { id: 6, group: "frontend", name: "CSS" },
    { id: 7, group: "frontend", name: "TailwindCSS" },
    { id: 8, group: "backend", name: "Python" },
    { id: 9, group: "backend", name: "Scripting" },
    { id: 10, group: "backend", name: "SQL" },
    { id: 11, group: "backend", name: "Postgres" },
    { id: 12, group: "backend", name: "NoSQL" },
    { id: 13, group: "general", name: "Git & Github" },
    { id: 14, group: "servers", name: "Docker" },
    { id: 15, group: "servers", name: "Linux" },
    { id: 16, group: "backend", name: "Flask" },
    { id: 17, group: "general", name: "Unit testing" },
    { id: 18, group: "general", name: "QA testing" },
    { id: 19, group: "backend", name: "MongoDB" },
    { id: 20, group: "backend", name: "OracleDB" },
    { id: 21, group: "backend", name: "TypeORM" },
    { id: 22, group: "backend", name: ".NET" },
    { id: 23, group: "backend", name: "EntityFramework" },
    { id: 24, group: "general", name: "Java" },
    { id: 25, group: "general", name: "C#" },
    { id: 26, group: "general", name: "XML" },
    { id: 27, group: "general", name: "JSON" },
    { id: 28, group: "servers", name: "AWS" },
    { id: 29, group: "servers", name: "CURL" },
    { id: 30, group: "servers", name: "SysAdmin" },
    { id: 31, group: "servers", name: "DevOps" },
    { id: 32, group: "data", name: "Data Analysis" },
    { id: 33, group: "servers", name: "Networking" },
    { id: 34, group: "others", name: "UX/UI" },
    { id: 35, group: "others", name: "Marketing" },
    { id: 36, group: "general", name: "Postman" },
    { id: 37, group: "servers", name: "CiberSecurity" },
    { id: 38, group: "frontend", name: "Bootstrap" },
    { id: 39, group: "others", name: "JIRA" },
    { id: 40, group: "general", name: "Sharepoint" },
    { id: 41, group: "others", name: "Office 365" },
  ];

  return (
    <motion.div
      className="flex max-h-screen w-full flex-col space-y-10 overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="m-auto mt-48 font-mono text-6xl font-bold text-chestnut-700">
        Skills
      </h1>
      <ul className="m-auto flex w-3/4 flex-wrap justify-center">
        {skillList.map((skill) => {
          return <SkillPill key={skill.id} skill={skill} size={"big"} />;
        })}
      </ul>
    </motion.div>
  );
};

export default Skills;
