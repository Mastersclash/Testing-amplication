import { Team } from "../team/Team";

export type Player = {
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
};
