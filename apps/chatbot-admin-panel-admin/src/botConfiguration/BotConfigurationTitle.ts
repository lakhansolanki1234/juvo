import { BotConfiguration as TBotConfiguration } from "../api/botConfiguration/BotConfiguration";

export const BOTCONFIGURATION_TITLE_FIELD = "name";

export const BotConfigurationTitle = (record: TBotConfiguration): string => {
  return record.name?.toString() || String(record.id);
};
