import { AppDataSource } from "../../data-source";
import { User } from "../../models/user";
import { UserDataParams } from "../../interfaces/user";

const userDeleteService = async ({ id }: UserDataParams) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  await userRepository.delete(account!.id);

  return true;
};

export default userDeleteService;
