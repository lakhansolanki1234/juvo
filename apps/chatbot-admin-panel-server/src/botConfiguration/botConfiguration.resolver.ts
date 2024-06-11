import * as graphql from "@nestjs/graphql";
import { BotConfigurationResolverBase } from "./base/botConfiguration.resolver.base";
import { BotConfiguration } from "./base/BotConfiguration";
import { BotConfigurationService } from "./botConfiguration.service";

@graphql.Resolver(() => BotConfiguration)
export class BotConfigurationResolver extends BotConfigurationResolverBase {
  constructor(protected readonly service: BotConfigurationService) {
    super(service);
  }
}
