import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MapDraftStatusResolverBase } from "./base/mapDraftStatus.resolver.base";
import { MapDraftStatus } from "./base/MapDraftStatus";
import { MapDraftStatusService } from "./mapDraftStatus.service";

@graphql.Resolver(() => MapDraftStatus)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MapDraftStatusResolver extends MapDraftStatusResolverBase {
  constructor(
    protected readonly service: MapDraftStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
