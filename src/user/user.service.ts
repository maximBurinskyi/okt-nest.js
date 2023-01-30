import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {

    }
   // private users = [];
    
    async getAll() {
        return this.userRepository.findAll();
    }
   

   async createUser(user: CreateUserDto) {
        return this.userRepository.create(user);
}
    async updateUserById(id: string, user: UpdateUserDto) {
    const updatedUser = await this.userRepository.update(
      { firstName: user.firstName, surName: user.surName, age: user.age },
      { where: { id: id } },
    );
    return updatedUser;
  }

  deleteUserById(id: string) {
    return this.userRepository.destroy({ where: { id: id } });
  }

    // async getById(id: string) {
    //     return this.userRepository.find(p => p.id === id)
    // }

    // async getById(@Args('id') id: number) {
    //     const foundUser = await this.userRepository.findOne(id);
    //     return foundUser.delete();
    //   }

    //   async deleteTodo(id: number) {
    //     const deletedTodo = await this.userRepository.delete(id);
       
    //   }

    // async getOne(id: string) {
    //     return this.userRepository.findOne(id)
    // }

     



}
