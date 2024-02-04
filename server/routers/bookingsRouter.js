import { Router } from "express";
import supabase from "../utills/supabase.js";

export const bookingsRouter = Router();

bookingsRouter.get("/sitters/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const data = await supabase
        .from("mock_booking")
        .select("*,owners(full_name),sitters(profile_img,full_name)")
        .eq("sitter_id", id);
  
      res.json({ data });
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
