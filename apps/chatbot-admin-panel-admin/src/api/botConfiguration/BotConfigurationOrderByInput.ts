import { SortOrder } from "../../util/SortOrder";

export type BotConfigurationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  settings?: SortOrder;
  updatedAt?: SortOrder;
};
