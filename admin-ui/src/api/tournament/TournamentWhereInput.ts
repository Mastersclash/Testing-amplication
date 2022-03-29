import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MapListRelationFilter } from "../map/MapListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { StreamerListRelationFilter } from "../streamer/StreamerListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type TournamentWhereInput = {
  assets?: AssetListRelationFilter;
  id?: StringFilter;
  maps?: MapListRelationFilter;
  name?: StringFilter;
  sessions?: SessionListRelationFilter;
  streamers?: StreamerListRelationFilter;
  teams?: TeamListRelationFilter;
};
