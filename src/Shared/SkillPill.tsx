import { ISkill } from "../Interfaces/ISkill";

interface IProps {
  skill: ISkill;
  size: string;
}

const SkillPill = (props: IProps) => {
  const { skill, size } = props;
  const handleColor = (group: string) => {
    switch (group) {
      case "frontend":
        return "bg-chestnut-200 border-chestnut-300";
      case "backend":
        return "bg-cordovan border-cordovan-600";
      case "servers":
        return "bg-periwinkle-200 border-periwinkle-300";
      case "data":
        return "bg-eggplant-500 border-eggplant-600";
      case "general":
        return "bg-burnt_sienna border-burnt_sienna-600";
      default:
        return "bg-anti-flash_white-200 border-anti-flash_white-300";
    }
  };

  return (
    <li
      className={
        handleColor(skill.group) +
        (size === "big" ? " p-3" : " p-2 text-sm") +
        " m-1 rounded-2xl border text-center font-bold text-white"
      }
      key={`${skill.id}`}
    >
      {skill.name}
    </li>
  );
};

export default SkillPill;
