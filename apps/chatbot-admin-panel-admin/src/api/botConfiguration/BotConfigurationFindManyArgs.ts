import { BotConfigurationWhereInput } from "./BotConfigurationWhereInput";
import { BotConfigurationOrderByInput } from "./BotConfigurationOrderByInput";

export type BotConfigurationFindManyArgs = {
  where?: BotConfigurationWhereInput;
  orderBy?: Array<BotConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
