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

sittersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("sitters")
      .select("*,comments(content)")
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

// sittersRouter.get("/:id/comment", async (req, res) => {
//   const sitterId = req.params.id;

//   try {
//     const { data, error } = await supabase
//       .from("sitters")
//       .select("sitters.*, owner.*, comments.content")
//       .eq("id", sitterId)
//       .join(
//         {
//           table: "owners",
//           on: "sitters.id = owners.id",
//         },
//         {
//           table: "comments",
//           on: "owners.id = comments.id",
//         }
//       );

//     if (error) {
//       console.error("Error fetching sitter details:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching sitter details:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
