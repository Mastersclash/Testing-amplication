import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MapDraftStatusServiceBase } from "./base/mapDraftStatus.service.base";

@Injectable()
export class MapDraftStatusService extends MapDraftStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
