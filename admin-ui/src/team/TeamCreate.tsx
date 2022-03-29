import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";
import { TournamentTitle } from "../tournament/TournamentTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Logo" source="logo" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="player"
          reference="Player"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlayerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tournament"
          reference="Tournament"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TournamentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
