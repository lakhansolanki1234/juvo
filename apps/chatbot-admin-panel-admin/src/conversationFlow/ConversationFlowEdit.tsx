import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BotConfigurationTitle } from "../botConfiguration/BotConfigurationTitle";

export const ConversationFlowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
