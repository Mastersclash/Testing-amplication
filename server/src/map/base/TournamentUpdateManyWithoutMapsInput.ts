/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TournamentWhereUniqueInput } from "../../tournament/base/TournamentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TournamentUpdateManyWithoutMapsInput {
  @Field(() => [TournamentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TournamentWhereUniqueInput],
  })
  connect?: Array<TournamentWhereUniqueInput>;

  @Field(() => [TournamentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TournamentWhereUniqueInput],
  })
  disconnect?: Array<TournamentWhereUniqueInput>;

  @Field(() => [TournamentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TournamentWhereUniqueInput],
  })
  set?: Array<TournamentWhereUniqueInput>;
}
export { TournamentUpdateManyWithoutMapsInput };
