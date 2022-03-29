import { Module } from "@nestjs/common";
import { StreamerModuleBase } from "./base/streamer.module.base";
import { StreamerService } from "./streamer.service";
import { StreamerController } from "./streamer.controller";
import { StreamerResolver } from "./streamer.resolver";

@Module({
  imports: [StreamerModuleBase],
  controllers: [StreamerController],
  providers: [StreamerService, StreamerResolver],
  exports: [StreamerService],
})
export class StreamerModule {}
