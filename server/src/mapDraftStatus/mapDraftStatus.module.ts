import { Module } from "@nestjs/common";
import { MapDraftStatusModuleBase } from "./base/mapDraftStatus.module.base";
import { MapDraftStatusService } from "./mapDraftStatus.service";
import { MapDraftStatusController } from "./mapDraftStatus.controller";
import { MapDraftStatusResolver } from "./mapDraftStatus.resolver";

@Module({
  imports: [MapDraftStatusModuleBase],
  controllers: [MapDraftStatusController],
  providers: [MapDraftStatusService, MapDraftStatusResolver],
  exports: [MapDraftStatusService],
})
export class MapDraftStatusModule {}
