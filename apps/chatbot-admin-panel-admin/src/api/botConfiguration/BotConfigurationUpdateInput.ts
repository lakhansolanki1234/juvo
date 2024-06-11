import { ConversationFlowUpdateManyWithoutBotConfigurationsInput } from "./ConversationFlowUpdateManyWithoutBotConfigurationsInput";
import { InputJsonValue } from "../../types";

export type BotConfigurationUpdateInput = {
  conversationFlows?: ConversationFlowUpdateManyWithoutBotConfigurationsInput;
  isActive?: boolean | null;
  name?: string | null;
  settings?: InputJsonValue;
};
