import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StreamerServiceBase } from "./base/streamer.service.base";

@Injectable()
export class StreamerService extends StreamerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
