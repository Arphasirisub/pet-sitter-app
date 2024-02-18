import { Router } from "express";
import supabase from "../utills/supabase.js";
import dotenv from "dotenv";
import oAuth2Client from "../utills/google.js";
import { protect } from "../middlewares/protect.js";
export const googleRouter = Router();
dotenv.config();

const scopes = ["https://www.googleapis.com/auth/calendar"];

googleRouter.get("/", async (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

googleRouter.get("/google/redirect", async (req, res) => {
  res.send("it's working");
});
