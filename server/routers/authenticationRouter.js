import { Router } from "express";
import supabase from "../utills/supabase.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const authenticationRouter = Router();
dotenv.config();
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
          profile_img: req.body.profile_img,
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
      return res.status(401).json({
        error: "Authentication failed",
        message: "Invalid email or password",
      });
    }

    // Fetch user data from both "sitters" and "owners" tables
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("id, email, role, name, profile_img")
      .eq("id", data.user.id)
      .single();

    const { data: ownerData, error: ownerError } = await supabase
      .from("owners")
      .select("id, email, role, name, profile_img")
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

    // Create a new JWT token with user information
    const token = jwt.sign(
      {
        id: data.user.id,
        email: data.user.email,
        role: userData.role,
        name: userData.name,
        profile_img: userData.profile_img,
      },
      process.env.SECRET_KEY,
      { expiresIn: "900000" }
    );

    // Include the user data and role in the response
    const response = {
      token: token,
      message: "Login successful",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Unhandled error:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: "Unexpected error during login",
    });
  }
});
