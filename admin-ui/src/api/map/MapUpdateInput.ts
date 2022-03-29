import { TournamentUpdateManyWithoutMapsInput } from "./TournamentUpdateManyWithoutMapsInput";

export type MapUpdateInput = {
  activated?: string;
  image?: string | null;
  name?: string;
  tournament?: TournamentUpdateManyWithoutMapsInput;
};
