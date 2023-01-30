import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) {

    }

    @Get()
    getAllUsers() {
        return this.usersService.getAll();
    }

    @ApiResponse({status: 201, type: User})
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }


    @Put(`/:id`)
    updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUserById(id, updateUserDto)
    }
    

    @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.deleteUserById(id)
    return "user deleted"
  }

   // @Get(`/:id`)
    // getOneUserById(@Param( `id`) id: string) {
    //     return `get user id ${id}
    // }

   // @Delete(`/:id`)
    // deleteUser(@Param() params): string {
    //     return this.usersService.deleteUser(params)

    // }

     

    //     @Get(':id')
//     findOne(@Param('id') id): string {
//     console.log(id);
//    // return `This action returns a #${params.id} cat`;
//    return this.usersService.getOne({id})
// }
}
