/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SessionWhereInput } from "./SessionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SessionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SessionWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereInput)
  @IsOptional()
  @Field(() => SessionWhereInput, {
    nullable: true,
  })
  every?: SessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereInput)
  @IsOptional()
  @Field(() => SessionWhereInput, {
    nullable: true,
  })
  some?: SessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereInput)
  @IsOptional()
  @Field(() => SessionWhereInput, {
    nullable: true,
  })
  none?: SessionWhereInput;
}
export { SessionListRelationFilter };
