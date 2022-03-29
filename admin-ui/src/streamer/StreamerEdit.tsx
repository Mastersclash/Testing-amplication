import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TournamentTitle } from "../tournament/TournamentTitle";

export const StreamerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="tournament.id"
          reference="Tournament"
          label="Tournament"
        >
          <SelectInput optionText={TournamentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
