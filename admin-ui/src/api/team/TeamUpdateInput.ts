import { PlayerUpdateManyWithoutTeamsInput } from "./PlayerUpdateManyWithoutTeamsInput";
import { TournamentUpdateManyWithoutTeamsInput } from "./TournamentUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  logo?: string | null;
  name?: string;
  players?: PlayerUpdateManyWithoutTeamsInput;
  tournament?: TournamentUpdateManyWithoutTeamsInput;
};
