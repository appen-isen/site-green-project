import express from "express";
import { getEnv } from "./config/env.js";
import router from "./router.js";

const app = express();

function bootstrap() {
  app.use(express.json());
  app.use(router);

  app.listen(getEnv("PORT"));
}

bootstrap();
