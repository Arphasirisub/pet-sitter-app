import { Router } from "express";
import supabase from "../utills/supabase.js";

export const authenticationRouter = Router();

authenticationRouter.post("/register", async (req, res) => {
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
    let tableName;

    if (req.body.role === "pet_sitter") {
      tableName = "sitters";
    } else {
      tableName = "owners";
    }

    const { data: insertData, error: insertError } = await supabase
      .from(tableName)
      .insert([
        {
          id: userId,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
          role: req.body.role,
        },
      ]);

    if (insertError) {
      console.error(
        `Error inserting data into '${tableName}':`,
        insertError.message
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json({
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Unhandled error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

authenticationRouter.post("/login", async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return res
        .status(401)
        .json({ error: "Authentication failed", message: error.message });
    }

    // Fetch user data, including the role, from both "sitters" and "owners" tables
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("id, email, role") // Include other relevant user data here
      .eq("id", data.user.id)
      .single();

    const { data: ownerData, error: ownerError } = await supabase
      .from("owners")
      .select("id, email, role") // Include other relevant user data here
      .eq("id", data.user.id)
      .single();

    if (sitterError && ownerError) {
      console.error(
        "User data retrieval error:",
        sitterError.message,
        ownerError.message
      );
      return res.status(500).json({
        error: "Internal Server Error",
        message: "Error retrieving user data",
      });
    }

    // Determine the role based on which table returned valid data
    const userData = sitterData || ownerData;

    // Include the user data and role in the response
    const response = {
      token: data.session.access_token,
      message: "Login successful",
      role: userData.role,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Unhandled error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
