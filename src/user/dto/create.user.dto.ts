import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Length, Min } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Length(2)
    surName: string;

    @IsString()
    email: string;


    @IsNumber()
    @Min(16)
    age: number;

    @IsString()
    @IsOptional()
    city: string;

    @IsBoolean()
    @IsOptional()
    isConfirm: boolean;


}