import { TournamentCreateNestedManyWithoutSessionsInput } from "./TournamentCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  name: string;
  tournaments?: TournamentCreateNestedManyWithoutSessionsInput;
};
