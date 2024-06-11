import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationFlowService } from "./conversationFlow.service";
import { ConversationFlowControllerBase } from "./base/conversationFlow.controller.base";

@swagger.ApiTags("conversationFlows")
@common.Controller("conversationFlows")
export class ConversationFlowController extends ConversationFlowControllerBase {
  constructor(protected readonly service: ConversationFlowService) {
    super(service);
  }
}
