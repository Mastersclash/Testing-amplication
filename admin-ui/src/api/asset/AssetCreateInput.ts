import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type AssetCreateInput = {
  tournament?: TournamentWhereUniqueInput | null;
};
