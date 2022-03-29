import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MapServiceBase } from "./base/map.service.base";

@Injectable()
export class MapService extends MapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
