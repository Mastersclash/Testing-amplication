import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MapDraftResolverBase } from "./base/mapDraft.resolver.base";
import { MapDraft } from "./base/MapDraft";
import { MapDraftService } from "./mapDraft.service";

@graphql.Resolver(() => MapDraft)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MapDraftResolver extends MapDraftResolverBase {
  constructor(
    protected readonly service: MapDraftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
