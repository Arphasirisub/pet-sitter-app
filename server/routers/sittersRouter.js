import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const sittersRouter = Router();

sittersRouter.use(protect);
