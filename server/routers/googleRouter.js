import { Router } from "express";
import supabase from "../utills/supabase.js";
import dotenv from "dotenv";
import oAuth2Client from "../utills/google.js";
import { protect } from "../middlewares/protect.js";
export const googleRouter = Router();
dotenv.config();

const scopes = ["https://www.googleapis.com/auth/calendar"];

googleRouter.get("/", async (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

googleRouter.get("/google/redirect", async (req, res) => {
  res.send("it's working");
});

googleRouter.post("/googleLogin", async (req, res) => {
  try {
    async function signInWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        // Handle error
        return res.status(500).json({ error: error.message });
      }

      // Authentication successful
      return res.status(200).json({ data });
    }

    await signInWithGoogle();
  } catch (error) {
    // Handle unexpected errors
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});
