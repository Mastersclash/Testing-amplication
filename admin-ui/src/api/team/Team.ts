import { Player } from "../player/Player";
import { Tournament } from "../tournament/Tournament";

export type Team = {
  createdAt: Date;
  id: string;
  logo: string | null;
  name: string;
  players?: Array<Player>;
  tournament?: Array<Tournament>;
  updatedAt: Date;
};
