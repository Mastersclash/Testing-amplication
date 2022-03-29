import { AssetUpdateManyWithoutTournamentsInput } from "./AssetUpdateManyWithoutTournamentsInput";
import { MapUpdateManyWithoutTournamentsInput } from "./MapUpdateManyWithoutTournamentsInput";
import { SessionUpdateManyWithoutTournamentsInput } from "./SessionUpdateManyWithoutTournamentsInput";
import { StreamerUpdateManyWithoutTournamentsInput } from "./StreamerUpdateManyWithoutTournamentsInput";
import { TeamUpdateManyWithoutTournamentsInput } from "./TeamUpdateManyWithoutTournamentsInput";

export type TournamentUpdateInput = {
  assets?: AssetUpdateManyWithoutTournamentsInput;
  maps?: MapUpdateManyWithoutTournamentsInput;
  name?: string;
  sessions?: SessionUpdateManyWithoutTournamentsInput;
  streamers?: StreamerUpdateManyWithoutTournamentsInput;
  teams?: TeamUpdateManyWithoutTournamentsInput;
};
