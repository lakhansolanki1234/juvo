import { BotConfigurationWhereUniqueInput } from "../botConfiguration/BotConfigurationWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationFlowWhereInput = {
  botConfiguration?: BotConfigurationWhereUniqueInput;
  flow?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
