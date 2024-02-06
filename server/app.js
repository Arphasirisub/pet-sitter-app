import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ownersRouter } from "./routers/ownerRouter.js";
import { authenticationRouter } from "./routers/authenticationRouter.js";
import { bookingsRouter } from "./routers/bookingsRouter.js";
import { sittersRouter } from "./routers/sittersRouter.js";
import { petsRouter } from "./routers/petsRouter.js";

function init() {
  dotenv.config();

  const app = express();
  const port = 4000;

  app.get("/", (req, res) => {
    res.send("Hello supabase");
  });

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/owners", ownersRouter);
  app.use("/authentication", authenticationRouter);
  app.use("/bookings", bookingsRouter);
  app.use("/sitters", sittersRouter);
  app.use("/pets", petsRouter);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

init();
