import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Length, Min } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        example: 'Olya',
        required: false
    })
    @IsString()
    @IsOptional()
    firstName: string;

    @ApiProperty({
        example: 'Smith',
        required: false
    })
    @IsString()
    @IsNotEmpty()
    @Length(2)
    surName: string;

    @ApiProperty({
        example: 'female',
        required: false
    })
    @IsString()
    @IsOptional()
    gender: string;

    @ApiProperty({
        example: 'olya@mail.com',
        required: false
    })
    @IsString()
    email: string;

    @ApiProperty({
        example: 25,
        required: false
    })
    @IsNumber()
    @Min(16)
    age: number;

    @ApiProperty({
        example: 'Lviv',
        required: false
    })
    @IsString()
    @IsOptional()
    city: string;

    @ApiProperty({
        example: true,
        required: false
    })
    @IsBoolean()
    @IsOptional()
    isConfirm: boolean;


}