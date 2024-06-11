import { BotConfigurationWhereUniqueInput } from "../botConfiguration/BotConfigurationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ConversationFlowCreateInput = {
  botConfiguration?: BotConfigurationWhereUniqueInput | null;
  flow?: InputJsonValue;
  name?: string | null;
};
