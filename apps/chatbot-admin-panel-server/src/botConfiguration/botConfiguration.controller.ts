import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BotConfigurationService } from "./botConfiguration.service";
import { BotConfigurationControllerBase } from "./base/botConfiguration.controller.base";

@swagger.ApiTags("botConfigurations")
@common.Controller("botConfigurations")
export class BotConfigurationController extends BotConfigurationControllerBase {
  constructor(protected readonly service: BotConfigurationService) {
    super(service);
  }
}
