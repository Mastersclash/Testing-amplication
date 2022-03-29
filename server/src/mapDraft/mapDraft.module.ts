import { Module } from "@nestjs/common";
import { MapDraftModuleBase } from "./base/mapDraft.module.base";
import { MapDraftService } from "./mapDraft.service";
import { MapDraftController } from "./mapDraft.controller";
import { MapDraftResolver } from "./mapDraft.resolver";

@Module({
  imports: [MapDraftModuleBase],
  controllers: [MapDraftController],
  providers: [MapDraftService, MapDraftResolver],
  exports: [MapDraftService],
})
export class MapDraftModule {}
