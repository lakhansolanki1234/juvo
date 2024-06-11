/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BotConfigurationService } from "../botConfiguration.service";
import { BotConfigurationCreateInput } from "./BotConfigurationCreateInput";
import { BotConfiguration } from "./BotConfiguration";
import { BotConfigurationFindManyArgs } from "./BotConfigurationFindManyArgs";
import { BotConfigurationWhereUniqueInput } from "./BotConfigurationWhereUniqueInput";
import { BotConfigurationUpdateInput } from "./BotConfigurationUpdateInput";
import { ConversationFlowFindManyArgs } from "../../conversationFlow/base/ConversationFlowFindManyArgs";
import { ConversationFlow } from "../../conversationFlow/base/ConversationFlow";
import { ConversationFlowWhereUniqueInput } from "../../conversationFlow/base/ConversationFlowWhereUniqueInput";

export class BotConfigurationControllerBase {
  constructor(protected readonly service: BotConfigurationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BotConfiguration })
  async createBotConfiguration(
    @common.Body() data: BotConfigurationCreateInput
  ): Promise<BotConfiguration> {
    return await this.service.createBotConfiguration({
      data: data,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        settings: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BotConfiguration] })
  @ApiNestedQuery(BotConfigurationFindManyArgs)
  async botConfigurations(
    @common.Req() request: Request
  ): Promise<BotConfiguration[]> {
    const args = plainToClass(BotConfigurationFindManyArgs, request.query);
    return this.service.botConfigurations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        settings: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BotConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async botConfiguration(
    @common.Param() params: BotConfigurationWhereUniqueInput
  ): Promise<BotConfiguration | null> {
    const result = await this.service.botConfiguration({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        settings: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BotConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBotConfiguration(
    @common.Param() params: BotConfigurationWhereUniqueInput,
    @common.Body() data: BotConfigurationUpdateInput
  ): Promise<BotConfiguration | null> {
    try {
      return await this.service.updateBotConfiguration({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          isActive: true,
          name: true,
          settings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BotConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBotConfiguration(
    @common.Param() params: BotConfigurationWhereUniqueInput
  ): Promise<BotConfiguration | null> {
    try {
      return await this.service.deleteBotConfiguration({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isActive: true,
          name: true,
          settings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/conversationFlows")
  @ApiNestedQuery(ConversationFlowFindManyArgs)
  async findConversationFlows(
    @common.Req() request: Request,
    @common.Param() params: BotConfigurationWhereUniqueInput
  ): Promise<ConversationFlow[]> {
    const query = plainToClass(ConversationFlowFindManyArgs, request.query);
    const results = await this.service.findConversationFlows(params.id, {
      ...query,
      select: {
        botConfiguration: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        flow: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/conversationFlows")
  async connectConversationFlows(
    @common.Param() params: BotConfigurationWhereUniqueInput,
    @common.Body() body: ConversationFlowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conversationFlows: {
        connect: body,
      },
    };
    await this.service.updateBotConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/conversationFlows")
  async updateConversationFlows(
    @common.Param() params: BotConfigurationWhereUniqueInput,
    @common.Body() body: ConversationFlowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conversationFlows: {
        set: body,
      },
    };
    await this.service.updateBotConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/conversationFlows")
  async disconnectConversationFlows(
    @common.Param() params: BotConfigurationWhereUniqueInput,
    @common.Body() body: ConversationFlowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conversationFlows: {
        disconnect: body,
      },
    };
    await this.service.updateBotConfiguration({
      where: params,
      data,
      select: { id: true },
    });
  }
}