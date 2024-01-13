import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { devServer } from "./src/Router/BackendRouter";



const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.json());
app.use("/devbook/server", devServer);

app.all("*", () => {
  const message = "The route that you have requested does not exist";
  throw new NotFoundError(message);
});

export { app };