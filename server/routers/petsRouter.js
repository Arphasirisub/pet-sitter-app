import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const petsRouter = Router();

petsRouter.get("/myPets", protect, async (req, res) => {
  try {
    const ownerId = req.userId;
    console.log(ownerId);
    const { data, error } = await supabase
      .from("pets")
      .select("*")
      .eq("owner_id", ownerId);

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if response has already been sent before sending another one
    if (!res.headersSent) {
      res.json({ data });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
