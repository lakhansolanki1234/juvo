import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotConfigurationServiceBase } from "./base/botConfiguration.service.base";

@Injectable()
export class BotConfigurationService extends BotConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
