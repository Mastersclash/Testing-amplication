import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatchStatusService } from "./matchStatus.service";
import { MatchStatusControllerBase } from "./base/matchStatus.controller.base";

@swagger.ApiTags("matchStatuses")
@common.Controller("matchStatuses")
export class MatchStatusController extends MatchStatusControllerBase {
  constructor(
    protected readonly service: MatchStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
