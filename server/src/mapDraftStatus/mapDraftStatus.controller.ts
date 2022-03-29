import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapDraftStatusService } from "./mapDraftStatus.service";
import { MapDraftStatusControllerBase } from "./base/mapDraftStatus.controller.base";

@swagger.ApiTags("mapDraftStatuses")
@common.Controller("mapDraftStatuses")
export class MapDraftStatusController extends MapDraftStatusControllerBase {
  constructor(
    protected readonly service: MapDraftStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
