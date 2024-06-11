import { SortOrder } from "../../util/SortOrder";

export type ConversationFlowOrderByInput = {
  botConfigurationId?: SortOrder;
  createdAt?: SortOrder;
  flow?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
