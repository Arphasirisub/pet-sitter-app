import { Router } from "express";
import supabase from "../utills/supabase.js";

export const petsRouter = Router();

petsRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("pets") // Selecting data from the "pets" table
      .select("*");

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    // Send the fetched data back to the client
    res.json({ data });
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from 'pets' table:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

petsRouter.get("/:id", async (req, res) => {
  try {
    const ownerId = req.params.id;
    const { data, error } = await supabase
      .from("pets")
      .select("*")
      .eq("owner_id", ownerId);

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    // Send the fetched data back to the client
    res.json({ data });
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from 'pets' table:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
