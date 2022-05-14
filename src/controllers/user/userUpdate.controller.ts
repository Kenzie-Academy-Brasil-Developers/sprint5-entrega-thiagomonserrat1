import { Request, Response } from "express";
import UserUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, email, age, password } = request.body;

  const updateService = new UserUpdateService();

  const user = await updateService.execute({
    name,
    email,
    age,
    password,
    id,
  });

  return response.json(user);
};

export default userUpdateController;
