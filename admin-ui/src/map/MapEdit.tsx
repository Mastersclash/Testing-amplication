import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TournamentTitle } from "../tournament/TournamentTitle";

export const MapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Activated" source="activated" />
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="tournament"
          reference="Tournament"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
