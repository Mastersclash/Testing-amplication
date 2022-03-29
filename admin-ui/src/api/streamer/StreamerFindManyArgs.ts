import { StreamerWhereInput } from "./StreamerWhereInput";
import { StreamerOrderByInput } from "./StreamerOrderByInput";

export type StreamerFindManyArgs = {
  where?: StreamerWhereInput;
  orderBy?: Array<StreamerOrderByInput>;
  skip?: number;
  take?: number;
};
