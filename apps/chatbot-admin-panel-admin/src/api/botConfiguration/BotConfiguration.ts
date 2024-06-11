import { ConversationFlow } from "../conversationFlow/ConversationFlow";
import { JsonValue } from "type-fest";

export type BotConfiguration = {
  conversationFlows?: Array<ConversationFlow>;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  settings: JsonValue;
  updatedAt: Date;
};
