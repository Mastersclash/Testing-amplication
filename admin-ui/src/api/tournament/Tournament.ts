import { Asset } from "../asset/Asset";
import { Map } from "../map/Map";
import { Session } from "../session/Session";
import { Streamer } from "../streamer/Streamer";
import { Team } from "../team/Team";

export type Tournament = {
  assets?: Array<Asset>;
  createdAt: Date;
  id: string;
  maps?: Array<Map>;
  name: string;
  sessions?: Array<Session>;
  streamers?: Array<Streamer>;
  teams?: Array<Team>;
  updatedAt: Date;
};
