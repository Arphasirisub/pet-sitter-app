import { Router } from "express";
import supabase from "../utills/supabase.js";
// import { protect } from "../middlewares/protect.js";

export const sittersRouter = Router();

sittersRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const { data, error } = await supabase
        .from("sitters")
        .select("*,comments(*)")
        .eq("id", id);
  
      if (error) {
        console.error("Error fetching data:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (!data || data.length === 0) {
        return res.status(404).json({ error: "Sitter not found" });
      }
  
      const singleObject = data[0]; // Extract the first object from the array
  
      res.json(singleObject);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  

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

            minExp = parseFloat(minExp);
            maxExp = maxExp === "+" ? 9999 : parseFloat(maxExp);

            if (isNaN(minExp) || isNaN(maxExp)) {
                return res.status(400).json({ error: "Invalid experience range" });
            }

            query = query.gte("experience", minExp).lte("experience", maxExp);
        }

        if (fullName) {
            query = query.ilike("full_name", `%${fullName}%`);
        }

        if (!isNaN(rating) && rating >= 1 && rating <= 5) {
            query = query.eq("rating", rating);
        }

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

        query = query.eq("is_active", true);

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
