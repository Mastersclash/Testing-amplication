import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
