import { Module } from "@nestjs/common";
import { ConversationFlowModuleBase } from "./base/conversationFlow.module.base";
import { ConversationFlowService } from "./conversationFlow.service";
import { ConversationFlowController } from "./conversationFlow.controller";
import { ConversationFlowResolver } from "./conversationFlow.resolver";

@Module({
  imports: [ConversationFlowModuleBase],
  controllers: [ConversationFlowController],
  providers: [ConversationFlowService, ConversationFlowResolver],
  exports: [ConversationFlowService],
})
export class ConversationFlowModule {}
