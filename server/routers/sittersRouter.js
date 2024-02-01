import { Router } from "express";
import supabase from "../utills/supabase.js";

export const sittersRouter = Router();

sittersRouter.get("/", async (req, res) => {

  try {
    const data = await supabase
      .from("sitters")
      .select("*")
      .ilike("full_name", `%${req.query.full_name || ""}%`)
      .ilike("province", `%${req.query.province || ""}%`)
      .ilike("district", `%${req.query.district || ""}%`);
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
