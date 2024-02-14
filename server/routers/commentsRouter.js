import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const commentsRouter = Router();

commentsRouter.post("/myPost/:sitterId", protect, async (req, res) => {
  const owner_id = req.userId;
  const sitter_id = req.params.sitterId;
  const { content, rating } = req.body;

//   if (!content || !rating) {
//     return res.status(400).json({ error: "Content and rating are required" });
//   }

  try {
    const { data, error } = await supabase.from("comments").insert({
      content: content,
      rating: rating,
      owner_id: owner_id,
      sitter_id: sitter_id,
    });
    if (error) {
      return console.log(error);
    }
    res.json({message: "Review submitted successfully"});
  } catch (error) {
    console.error("Error fetching data from 'pets' table:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
