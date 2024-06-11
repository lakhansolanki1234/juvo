import { ConversationFlowCreateNestedManyWithoutBotConfigurationsInput } from "./ConversationFlowCreateNestedManyWithoutBotConfigurationsInput";
import { InputJsonValue } from "../../types";

export type BotConfigurationCreateInput = {
  conversationFlows?: ConversationFlowCreateNestedManyWithoutBotConfigurationsInput;
  isActive?: boolean | null;
  name?: string | null;
  settings?: InputJsonValue;
};
