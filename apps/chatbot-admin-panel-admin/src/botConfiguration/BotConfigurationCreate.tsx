import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { ConversationFlowTitle } from "../conversationFlow/ConversationFlowTitle";

export const BotConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="conversationFlows"
          reference="ConversationFlow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversationFlowTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
