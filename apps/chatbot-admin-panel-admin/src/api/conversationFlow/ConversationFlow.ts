import { BotConfiguration } from "../botConfiguration/BotConfiguration";
import { JsonValue } from "type-fest";

export type ConversationFlow = {
  botConfiguration?: BotConfiguration | null;
  createdAt: Date;
  flow: JsonValue;
  id: string;
  name: string | null;
  updatedAt: Date;
};
