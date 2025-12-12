import { Router } from "express";

export default Router().get("/ping", (_req, res) => {
  res.send("Pong!");
});
