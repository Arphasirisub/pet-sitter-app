import { Router } from "express";
import supabase from "../utills/supabase.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { protect } from "../middlewares/protect.js";
export const facebookRouter = Router();
dotenv.config();

facebookRouter.post("/facebookLogin", async (req, res) => {
  try {
    async function signInWithFacebook() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      if (error) {
        // Handle error
        return res.status(500).json({ error: error.message });
      }

      // Authentication successful
      return res.status(200).json({ data });
    }

    await signInWithFacebook();
  } catch (error) {
    // Handle unexpected errors
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

facebookRouter.post("/facebookToken/:token", async (req, res) => {
  try {
    const { token } = req.params;
    console.log("Received token:", token);

    // Verify the token using the secret key from the .env file
    const secretKey = process.env.SECRET_KEY;
    const decodedPayload = jwt.verify(token, secretKey);

    // Access the email from the decoded payload
    const email = decodedPayload.email;
    console.log("Decoded email:", email);

    let userData = {};

    // Retrieve user data from 'sitters' table
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("id, email, role, full_name, profile_img")
      .eq("email", email)
      .single();

    userData = sitterData;

    // Retrieve user data from 'owners' table
    const { data: ownerData, error: ownerError } = await supabase
      .from("owners")
      .select("id, email, role, full_name, profile_img")
      .eq("email", email)
      .single();

    userData = ownerData;

    // Check if neither sitterData nor ownerData contains data
    if (!userData) {
      // If user data is not found in either table, indicate that user is new and needs to select a role
      return res.status(200).json({
        newUser: {
          id: decodedPayload.sub,
          email: decodedPayload.email,
          full_name: decodedPayload.user_metadata.full_name,
          picture: decodedPayload.user_metadata.picture,
        },

        message: "Login successful",
      });
    }

    // Create a new JWT token with user information
    const newTokenPayload = {
      id: userData.id,
      email: userData.email,
      role: userData.role,
      name: userData.full_name,
      profile_img: userData.profile_img,
    };

    const newToken = jwt.sign(newTokenPayload, secretKey, {
      expiresIn: "900000",
    });

    // Send the new token and success message in the response
    return res.status(200).json({
      existUser: { token: newToken },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
});

facebookRouter.put("/updateUser", async (req, res) => {
  try {
    console.log(req.body);
    let tableName = "";
    if (req.body.role === "pet_sitter") {
      tableName = "sitters";
    } else {
      tableName = "owners";
    }
    console.log(tableName);
    const { data: insertData, error: insertError } = await supabase
      .from(tableName)
      .insert({
        id: req.body.id,
        full_name: req.body.full_name,
        email: req.body.email,
        profile_img: req.body.picture,
        role: req.body.role,
      });
    console.log(insertError);
    const newTokenPayload = {
      id: req.body.id,
      email: req.body.email,
      role: req.body.role,
      name: req.body.full_name,
      profile_img: req.body.picture,
    };

    const secretKey = process.env.SECRET_KEY;
    const newToken = jwt.sign(newTokenPayload, secretKey, {
      expiresIn: "900000",
    });

    // Send the new token and success message in the response
    return res.status(200).json({
      token: newToken,
      message: "Login successful",
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});
