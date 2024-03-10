import { ISkill } from "./ISkill";

export interface IProject {
  id: string;
  name: string;
  githubLink: string;
  hostingLink?: string;
  summary: string;
  description: string;
  skills: ISkill[];
}
