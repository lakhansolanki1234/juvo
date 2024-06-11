import { ConversationFlowListRelationFilter } from "../conversationFlow/ConversationFlowListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BotConfigurationWhereInput = {
  conversationFlows?: ConversationFlowListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  settings?: JsonFilter;
};
