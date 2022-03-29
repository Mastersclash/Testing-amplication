import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerWhereInput = {
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
};
