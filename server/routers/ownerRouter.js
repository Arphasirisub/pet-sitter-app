import { Router } from "express";
import supabase from "../utills/supabase.js";

export const ownersRouter = Router();

ownersRouter.get("/", async (req, res) => {
  try {
    const data = await supabase.from("owners").select("*");
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
