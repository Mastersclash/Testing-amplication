import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MapResolverBase } from "./base/map.resolver.base";
import { Map } from "./base/Map";
import { MapService } from "./map.service";

@graphql.Resolver(() => Map)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MapResolver extends MapResolverBase {
  constructor(
    protected readonly service: MapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
