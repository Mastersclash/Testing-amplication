import { Tournament } from "../tournament/Tournament";

export type Session = {
  createdAt: Date;
  id: string;
  name: string;
  tournaments?: Array<Tournament>;
  updatedAt: Date;
};
