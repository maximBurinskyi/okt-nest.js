import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min } from "class-validator";


export class UpdateUserDto {

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Length(2)
    surName: string;

    @IsNumber()
    @Min(16)
    age: number;


}