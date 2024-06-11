import { ConversationFlow as TConversationFlow } from "../api/conversationFlow/ConversationFlow";

export const CONVERSATIONFLOW_TITLE_FIELD = "name";

export const ConversationFlowTitle = (record: TConversationFlow): string => {
  return record.name?.toString() || String(record.id);
};
