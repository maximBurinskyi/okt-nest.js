import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/car/car.model';
import { Role } from 'src/role/role.model';
import { UserRoles } from 'src/role/user-role.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports:[SequelizeModule.forFeature([User, Car, Role, UserRoles])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
