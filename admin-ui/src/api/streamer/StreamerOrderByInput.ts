import { SortOrder } from "../../util/SortOrder";

export type StreamerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
