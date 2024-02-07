import { Router } from "express";
import supabase from "../utills/supabase.js";

export const petsRouter = Router();

petsRouter.get("/owner/:id", async (req, res) => {
  try {
    const ownerId = req.params.id;
    const { data, error } = await supabase
      .from("pets")
      .select("*")
      .eq("owner_id", ownerId);

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
