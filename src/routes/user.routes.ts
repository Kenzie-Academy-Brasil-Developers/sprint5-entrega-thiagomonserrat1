import { Router } from "express";
import userListController from "../controllers/user/listUser.controller";

const routes = Router();

import userCreateController from "../controllers/user/userCreate.controller";
import userListOneController from "../controllers/user/listOneUser.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";

routes.post("/", userCreateController);
routes.get("/", userListController);
routes.get("/:id", userListOneController);
routes.patch("/:id", userUpdateController);
routes.delete("/:id", userDeleteController);

export default routes;
