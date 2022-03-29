import { PlayerCreateNestedManyWithoutTeamsInput } from "./PlayerCreateNestedManyWithoutTeamsInput";
import { TournamentCreateNestedManyWithoutTeamsInput } from "./TournamentCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  logo?: string | null;
  name: string;
  players?: PlayerCreateNestedManyWithoutTeamsInput;
  tournament?: TournamentCreateNestedManyWithoutTeamsInput;
};
