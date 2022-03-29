import { AssetCreateNestedManyWithoutTournamentsInput } from "./AssetCreateNestedManyWithoutTournamentsInput";
import { MapCreateNestedManyWithoutTournamentsInput } from "./MapCreateNestedManyWithoutTournamentsInput";
import { SessionCreateNestedManyWithoutTournamentsInput } from "./SessionCreateNestedManyWithoutTournamentsInput";
import { StreamerCreateNestedManyWithoutTournamentsInput } from "./StreamerCreateNestedManyWithoutTournamentsInput";
import { TeamCreateNestedManyWithoutTournamentsInput } from "./TeamCreateNestedManyWithoutTournamentsInput";

export type TournamentCreateInput = {
  assets?: AssetCreateNestedManyWithoutTournamentsInput;
  maps?: MapCreateNestedManyWithoutTournamentsInput;
  name: string;
  sessions?: SessionCreateNestedManyWithoutTournamentsInput;
  streamers?: StreamerCreateNestedManyWithoutTournamentsInput;
  teams?: TeamCreateNestedManyWithoutTournamentsInput;
};
