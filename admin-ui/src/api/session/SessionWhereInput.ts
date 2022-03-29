import { StringFilter } from "../../util/StringFilter";
import { TournamentListRelationFilter } from "../tournament/TournamentListRelationFilter";

export type SessionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  tournaments?: TournamentListRelationFilter;
};
