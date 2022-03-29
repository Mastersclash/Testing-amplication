import { Tournament } from "../tournament/Tournament";

export type Asset = {
  createdAt: Date;
  id: string;
  tournament?: Tournament | null;
  updatedAt: Date;
};
