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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TournamentUpdateManyWithoutMapsInput } from "./TournamentUpdateManyWithoutMapsInput";
import { Type } from "class-transformer";
@InputType()
class MapUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  activated?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TournamentUpdateManyWithoutMapsInput,
  })
  @ValidateNested()
  @Type(() => TournamentUpdateManyWithoutMapsInput)
  @IsOptional()
  @Field(() => TournamentUpdateManyWithoutMapsInput, {
    nullable: true,
  })
  tournament?: TournamentUpdateManyWithoutMapsInput;
}
export { MapUpdateInput };
