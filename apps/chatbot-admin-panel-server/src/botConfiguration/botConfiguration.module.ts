import { Module } from "@nestjs/common";
import { BotConfigurationModuleBase } from "./base/botConfiguration.module.base";
import { BotConfigurationService } from "./botConfiguration.service";
import { BotConfigurationController } from "./botConfiguration.controller";
import { BotConfigurationResolver } from "./botConfiguration.resolver";

@Module({
  imports: [BotConfigurationModuleBase],
  controllers: [BotConfigurationController],
  providers: [BotConfigurationService, BotConfigurationResolver],
  exports: [BotConfigurationService],
})
export class BotConfigurationModule {}
