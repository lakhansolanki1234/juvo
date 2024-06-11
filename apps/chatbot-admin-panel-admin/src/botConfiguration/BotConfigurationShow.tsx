import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BOTCONFIGURATION_TITLE_FIELD } from "./BotConfigurationTitle";

export const BotConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <TextField label="settings" source="settings" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ConversationFlow"
          target="botConfigurationId"
          label="ConversationFlows"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="botConfiguration"
              source="botconfiguration.id"
              reference="BotConfiguration"
            >
              <TextField source={BOTCONFIGURATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="flow" source="flow" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
