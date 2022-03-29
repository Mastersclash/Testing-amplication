import { Module } from "@nestjs/common";
import { MatchStatusModuleBase } from "./base/matchStatus.module.base";
import { MatchStatusService } from "./matchStatus.service";
import { MatchStatusController } from "./matchStatus.controller";
import { MatchStatusResolver } from "./matchStatus.resolver";

@Module({
  imports: [MatchStatusModuleBase],
  controllers: [MatchStatusController],
  providers: [MatchStatusService, MatchStatusResolver],
  exports: [MatchStatusService],
})
export class MatchStatusModule {}
