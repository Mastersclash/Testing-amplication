import { Tournament } from "../tournament/Tournament";

export type Streamer = {
  createdAt: Date;
  id: string;
  tournament?: Tournament | null;
  updatedAt: Date;
};
