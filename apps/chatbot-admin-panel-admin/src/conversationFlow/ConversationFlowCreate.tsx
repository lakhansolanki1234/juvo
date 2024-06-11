import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BotConfigurationTitle } from "../botConfiguration/BotConfigurationTitle";

export const ConversationFlowCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="botConfiguration.id"
          reference="BotConfiguration"
          label="botConfiguration"
        >
          <SelectInput optionText={BotConfigurationTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
