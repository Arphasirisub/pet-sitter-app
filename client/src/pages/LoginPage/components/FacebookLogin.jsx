import React from "react";
import supabase from "../../../supabase.js";
import { Auth } from "@supabase/ui";
import { useNavigate } from "react-router-dom";
import { dark } from "@mui/material/styles/createPalette.js";

const FacebookLogin = () => {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
    } else {
    }
  });
  return (
    <>
      <Auth supabaseClient={supabase} providers={["facebook"]} />
    </>
  );
};

export default FacebookLogin;
