import { TournamentUpdateManyWithoutSessionsInput } from "./TournamentUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  name?: string;
  tournaments?: TournamentUpdateManyWithoutSessionsInput;
};
