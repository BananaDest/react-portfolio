import { ISkill } from "./ISkill";

export interface IExperience {
  id: string;
  jobTitle: string;
  employeer: string;
  dateRange?: string;
  description: string[];
  skills: ISkill[];
}
