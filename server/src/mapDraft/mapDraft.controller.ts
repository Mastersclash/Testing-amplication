import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapDraftService } from "./mapDraft.service";
import { MapDraftControllerBase } from "./base/mapDraft.controller.base";

@swagger.ApiTags("mapDrafts")
@common.Controller("mapDrafts")
export class MapDraftController extends MapDraftControllerBase {
  constructor(
    protected readonly service: MapDraftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
