import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TournamentListRelationFilter } from "../tournament/TournamentListRelationFilter";

export type MapWhereInput = {
  activated?: StringFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringFilter;
  tournament?: TournamentListRelationFilter;
};
