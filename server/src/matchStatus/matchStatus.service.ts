import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MatchStatusServiceBase } from "./base/matchStatus.service.base";

@Injectable()
export class MatchStatusService extends MatchStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
