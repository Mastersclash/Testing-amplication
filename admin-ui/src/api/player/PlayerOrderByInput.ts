import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
