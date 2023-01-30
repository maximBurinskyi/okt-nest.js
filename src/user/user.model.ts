import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'users'})
export class User extends Model<User> {

    // @Column({
    //     type: DataType.STRING,
    //     autoIncrement: true,
    //     unique: true,
    //     primaryKey: true,
    // })
    // id: string;

    @ApiProperty({
        example: 'Olya',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: true})
    firstName: string;

    @ApiProperty({
        example: 'Smith',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false})
    surName: string;

    @ApiProperty({
        example: 'female',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @ApiProperty({
        example: 25,
        required: false
    })
    @Column({type: DataType.INTEGER, allowNull: false})
    age: number;

    @ApiProperty({
        example: 'Lviv',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: true})
    city: string;

    @ApiProperty({
        example: true,
        required: false
    })
    @Column({type: DataType.BOOLEAN, allowNull: true})
    isConfirm: boolean;

    @ApiProperty({
        example: 'olya@mail.com',
        required: false
    })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;


}