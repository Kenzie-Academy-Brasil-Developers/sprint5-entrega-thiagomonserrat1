import "reflect-metadata";
import express from "express";
import routes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/users", routes);

app.listen(3000);

export default app;
