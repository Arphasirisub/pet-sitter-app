import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const ownersRouter = Router();

ownersRouter.get("/myProfile", protect, async (req, res) => {
  const ownerId = req.userId;

  try {
    console.log(ownerId);
    const owner = await supabase
      .from("owners")
      .select("*")
      .eq("id", ownerId)
      .single();

    if (owner.length === 0) {
      return res.status(404).json({ error: "Owner not found" });
    }

    res.json({ data: owner });
  } catch (error) {
    console.error("Error fetching owner:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ownersRouter.get("/", async (req, res) => {
  try {
    const data = await supabase.from("owners").select("*");
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ownersRouter.get("/:id", async (req, res) => {
  const ownerId = req.params.id;

  try {
    const owner = await supabase
      .from("owners")
      .select("*")
      .eq("id", ownerId)
      .single();

    if (owner.length === 0) {
      return res.status(404).json({ error: "Owner not found" });
    }

    res.json({ data: owner });
  } catch (error) {
    console.error("Error fetching owner:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
