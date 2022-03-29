import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";
import { TournamentListRelationFilter } from "../tournament/TournamentListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringFilter;
  players?: PlayerListRelationFilter;
  tournament?: TournamentListRelationFilter;
};
