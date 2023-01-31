import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Car } from "src/car/car.model";
import { Role } from "src/role/role.model";
import { UserRoles } from "src/role/user-role.model";

@Table({tableName: 'users'})
export class User extends Model<User> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

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
    @Column({type: DataType.STRING, allowNull: true})
    gender: string;

    @ApiProperty({
        example: 25,
        required: false
    })
    @Column({type: DataType.INTEGER, allowNull: true})
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

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @HasMany(() => Car)
    cars: Car[];

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];


}