import { StringFilter } from "../../util/StringFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type StreamerWhereInput = {
  id?: StringFilter;
  tournament?: TournamentWhereUniqueInput;
};
