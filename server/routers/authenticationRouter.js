import { Router } from "express";
import supabase from "../utills/supabase.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { protect } from "../middlewares/protect.js";
export const authenticationRouter = Router();
dotenv.config();

authenticationRouter.post("/login", async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) {
      console.error("Login error:", error.message);

      // Return a 200 status with a message
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Fetch user data from both "sitters" and "owners" tables
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("id, email, role, full_name, profile_img")
      .eq("id", data.user.id)
      .single();

    const { data: ownerData, error: ownerError } = await supabase
      .from("owners")
      .select("id, email, role, full_name, profile_img")
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
        name: userData.full_name,
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

    return res.status(200).json(response);
  } catch (error) {
    console.error("Unhandled error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Unexpected error during login",
    });
  }
});

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
      return res.status(400).json({ message: "Invalid email or password" });
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
          full_name: req.body.name,
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

authenticationRouter.put("/forgotPassword", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    // If successful, Supabase sends an email with a password reset link
    res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

authenticationRouter.post("/forgotPasswordOTP", async (req, res) => {
  try {
    const { email, token } = req.body;

    console.log(email, token);

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email", // Make sure the type is set to 'email'
    });

    if (error) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }

    // Handle the verification response based on your requirements
    if (data) {
      return res
        .status(200)
        .json({ message: "Email OTP verification successful" });
    }

    res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

authenticationRouter.put("/updatePassword", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const { data, error } = await supabase.auth.updateUser({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // If successful, Supabase sends an email with a password reset link
    res.status(200).json({ message: "new Password create successfully." });
  } catch (error) {
    console.error("Error updating password:", error.message);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});
