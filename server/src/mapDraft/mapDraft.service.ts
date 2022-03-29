import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MapDraftServiceBase } from "./base/mapDraft.service.base";

@Injectable()
export class MapDraftService extends MapDraftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
