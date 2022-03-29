import { Module } from "@nestjs/common";
import { MapModuleBase } from "./base/map.module.base";
import { MapService } from "./map.service";
import { MapController } from "./map.controller";
import { MapResolver } from "./map.resolver";

@Module({
  imports: [MapModuleBase],
  controllers: [MapController],
  providers: [MapService, MapResolver],
  exports: [MapService],
})
export class MapModule {}
