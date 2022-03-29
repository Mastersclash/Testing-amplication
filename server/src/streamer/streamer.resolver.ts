import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StreamerResolverBase } from "./base/streamer.resolver.base";
import { Streamer } from "./base/Streamer";
import { StreamerService } from "./streamer.service";

@graphql.Resolver(() => Streamer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StreamerResolver extends StreamerResolverBase {
  constructor(
    protected readonly service: StreamerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
