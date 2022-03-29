import { Tournament } from "../tournament/Tournament";

export type Map = {
  activated: string;
  createdAt: Date;
  id: string;
  image: string | null;
  name: string;
  tournament?: Array<Tournament>;
  updatedAt: Date;
};
