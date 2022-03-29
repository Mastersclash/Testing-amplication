import { StringFilter } from "../../util/StringFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type AssetWhereInput = {
  id?: StringFilter;
  tournament?: TournamentWhereUniqueInput;
};
