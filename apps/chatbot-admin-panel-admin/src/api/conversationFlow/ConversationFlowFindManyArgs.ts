import { ConversationFlowWhereInput } from "./ConversationFlowWhereInput";
import { ConversationFlowOrderByInput } from "./ConversationFlowOrderByInput";

export type ConversationFlowFindManyArgs = {
  where?: ConversationFlowWhereInput;
  orderBy?: Array<ConversationFlowOrderByInput>;
  skip?: number;
  take?: number;
};
