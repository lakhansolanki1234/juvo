import * as graphql from "@nestjs/graphql";
import { ConversationFlowResolverBase } from "./base/conversationFlow.resolver.base";
import { ConversationFlow } from "./base/ConversationFlow";
import { ConversationFlowService } from "./conversationFlow.service";

@graphql.Resolver(() => ConversationFlow)
export class ConversationFlowResolver extends ConversationFlowResolverBase {
  constructor(protected readonly service: ConversationFlowService) {
    super(service);
  }
}
