import { motion } from "framer-motion";

import SkillPill from "../Shared/SkillPill";

import { IExperience } from "../Interfaces/IExperience";

const Experience = () => {
  const ExperienceList: IExperience[] = [
    {
      id: "1",
      jobTitle: "Junior Software Developer",
      employeer: "Multiplied Solutions",
      dateRange: "2021 - Current",
      description: [
        "Agile web application development using PERN stack and TS",
        "Creation of middleware connecting various APIs",
        "Worked in QA, Unit and Acceptance testing",
        "Working closely with clients, directly receiving requirements and presenting results",
      ],
      skills: [
        { id: 1, group: "frontend", name: "React" },
        { id: 2, group: "frontend", name: "Typescript" },
        { id: 4, group: "backend", name: "Node JS" },
        { id: 5, group: "backend", name: "Rest APIs" },
        { id: 38, group: "frontend", name: "Bootstrap" },
        { id: 11, group: "backend", name: "Postgres" },
        { id: 39, group: "others", name: "JIRA" },
        { id: 17, group: "general", name: "Unit testing" },
        { id: 18, group: "general", name: "QA testing" },
        { id: 13, group: "general", name: "Git & Github" },
      ],
    },
    {
      id: "2",
      jobTitle: "IT intern",
      employeer: "Advisicon",
      dateRange: "2020",
      description: [
        "Worked with Office 365 suite",
        "Developed Sharepoint and Power Platform solutions",
      ],
      skills: [
        { id: 5, group: "backend", name: "Rest APIs" },
        { id: 22, group: "backend", name: ".NET" },
        { id: 40, group: "general", name: "Sharepoint" },
        { id: 41, group: "others", name: "Office 365" },
      ],
    },
    {
      id: "3",
      jobTitle: "Expotec Main Award",
      employeer: "CEDES Don Bosco",
      dateRange: "2019",
      description: [
        "Created LMS using Sharepoint",
        "Lead and helped students by creating and publishing educational material",
      ],
      skills: [
        { id: 5, group: "backend", name: "Rest APIs" },
        { id: 22, group: "backend", name: ".NET" },
        { id: 40, group: "general", name: "Sharepoint" },
        { id: 41, group: "others", name: "Office 365" },
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
        Experience
      </h1>
      <ul className="m-auto flex flex-col items-center justify-center lg:w-3/4 lg:flex-row lg:space-x-10">
        {ExperienceList.map((experience) => {
          return (
            <li
              className={
                "mt-4 w-[75vw] rounded-2xl border border-chestnut bg-cordovan-100 text-center font-bold text-white lg:aspect-[4/4] lg:w-[25vw]"
              }
              key={experience.id}
            >
              <div className="m-auto flex flex-col space-y-3 p-10">
                <h1 className="min-h-[7vh] text-left font-mono text-xl font-bold text-chestnut-700">
                  {experience.jobTitle} - {experience.employeer}
                </h1>
                <p className="max-w-[100vh] self-start text-wrap text-sm text-white ">
                  {experience.dateRange ?? "Current"}
                </p>
                <p className="hidden max-w-[100vh] self-start text-wrap text-sm text-white lg:flex ">
                  <ul className="flex min-h-[15vh] flex-col space-y-1">
                    {experience.description.map((desc, index) => {
                      return (
                        <li key={index} className=" text-left">
                          - {desc}
                        </li>
                      );
                    })}
                  </ul>
                </p>
                <div className="flex max-h-full w-full flex-col space-y-10 overflow-hidden ">
                  <ul className="mt-1 flex w-full flex-wrap justify-start">
                    {experience.skills.map((skill) => {
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

export default Experience;
