import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationFlowServiceBase } from "./base/conversationFlow.service.base";

@Injectable()
export class ConversationFlowService extends ConversationFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
