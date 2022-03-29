/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StreamerWhereUniqueInput } from "../../streamer/base/StreamerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class StreamerUpdateManyWithoutTournamentsInput {
  @Field(() => [StreamerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StreamerWhereUniqueInput],
  })
  connect?: Array<StreamerWhereUniqueInput>;

  @Field(() => [StreamerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StreamerWhereUniqueInput],
  })
  disconnect?: Array<StreamerWhereUniqueInput>;

  @Field(() => [StreamerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StreamerWhereUniqueInput],
  })
  set?: Array<StreamerWhereUniqueInput>;
}
export { StreamerUpdateManyWithoutTournamentsInput };
