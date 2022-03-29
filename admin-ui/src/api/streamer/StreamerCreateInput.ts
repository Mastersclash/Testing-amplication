import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type StreamerCreateInput = {
  tournament?: TournamentWhereUniqueInput | null;
};
