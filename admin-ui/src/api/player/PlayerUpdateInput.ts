import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerUpdateInput = {
  team?: TeamWhereUniqueInput | null;
};
