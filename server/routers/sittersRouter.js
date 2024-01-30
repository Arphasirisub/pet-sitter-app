import { Router } from "express";
import supabase from "../utills/supabase.js";

export const sittersRouter = Router();

sittersRouter.post("/", async (req, res) => {
  try {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: req.body.email,
        password: req.body.password,
      }
    );

    if (signUpError) {
      console.error("Sign-up error:", signUpError.message);
      return res
        .status(400)
        .json({ error: "Sign-up error", message: signUpError.message });
    }

    const userId = signUpData.user.id;

    // Define the table name and role message based on the role (pet_owner, pet_sitter)
    const tableName = "sitters"; // Adjust as needed
    const roleMessage = "Pet Sister"; // Adjust as needed

    const { data: insertData, error: insertError } = await supabase
      .from(tableName)
      .insert([
        {
          id: userId,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        },
      ]);

    if (insertError) {
      console.error(
        `Error inserting data into '${tableName}':`,
        insertError.message
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Optionally, send a success response
    res.status(201).json({
      userId,
      message: `${roleMessage} and row inserted successfully`,
    });
  } catch (error) {
    console.error("Unhandled error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
