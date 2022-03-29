import { TournamentCreateNestedManyWithoutMapsInput } from "./TournamentCreateNestedManyWithoutMapsInput";

export type MapCreateInput = {
  activated: string;
  image?: string | null;
  name: string;
  tournament?: TournamentCreateNestedManyWithoutMapsInput;
};
