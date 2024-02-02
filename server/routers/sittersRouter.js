import { Router } from "express";
import supabase from "../utills/supabase.js";

export const sittersRouter = Router();



sittersRouter.get("/", async (req, res) => {
  const experienceRange = req.query.experience;
  const fullName = req.query.full_name;
  const rating = Number(req.query.rating);
  const dog = req.query.dog === "true";
  const cat = req.query.cat === "true";
  const bird = req.query.bird === "true";
  const rabbit = req.query.rabbit === "true";

  try {
    let query = supabase.from("sitters").select("*");

    if (experienceRange) {
      let [minExp, maxExp] = experienceRange.split("-");

      // Convert minExp and maxExp to numeric values
      minExp = parseFloat(minExp);
      maxExp = maxExp === "+" ? 9999 : parseFloat(maxExp);

      // Check if minExp and maxExp are valid numbers
      if (isNaN(minExp) || isNaN(maxExp)) {
        return res.status(400).json({ error: "Invalid experience range" });
      }

      // Assume you want to filter experiences within the provided range
      query = query.gte("experience", minExp).lte("experience", maxExp);
    }

    if (fullName) {
      // Add filter for full_name using ilike
      query = query.ilike("full_name", `%${fullName}%`);
    }

    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      // Add filter for rating if it's a valid number between 1 and 5
      query = query.eq("rating", rating);
    }

    // Filter by pet types using boolean values
    if (dog) {
      query = query.eq("dog", true);
    }

    if (cat) {
      query = query.eq("cat", true);
    }

    if (bird) {
      query = query.eq("bird", true);
    }

    if (rabbit) {
      query = query.eq("rabbit", true);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
