import { ISkill } from "./ISkill";
export interface IEducation {
  id: string;
  title: string;
  organization: string;
  dateRange?: string;
  skills: ISkill[];
}
