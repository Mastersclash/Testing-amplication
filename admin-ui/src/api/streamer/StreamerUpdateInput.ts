import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type StreamerUpdateInput = {
  tournament?: TournamentWhereUniqueInput | null;
};
