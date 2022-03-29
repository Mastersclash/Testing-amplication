import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StreamerService } from "./streamer.service";
import { StreamerControllerBase } from "./base/streamer.controller.base";

@swagger.ApiTags("streamers")
@common.Controller("streamers")
export class StreamerController extends StreamerControllerBase {
  constructor(
    protected readonly service: StreamerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
