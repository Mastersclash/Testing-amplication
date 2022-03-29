import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerCreateInput = {
  team?: TeamWhereUniqueInput | null;
};
