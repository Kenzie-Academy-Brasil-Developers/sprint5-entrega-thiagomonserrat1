import { User } from "../../models/user";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { hash } from "bcryptjs";

interface UserDataParams {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export default class UserUpdateService {
  async execute({
    id,
    name,
    email,
    password,
    age,
  }: UserDataParams): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id } });

    const hashedPassword = await hash(password, 8);

    if (!user) {
      throw new AppError("Not found any product with this id");
    }

    name ? (user.name = name) : user.name;
    email ? (user.email = email) : user.email;
    password ? (user.password = hashedPassword) : user.password;
    age ? (user.age = age) : user.age;

    return userRepository.save(user);
  }
}
