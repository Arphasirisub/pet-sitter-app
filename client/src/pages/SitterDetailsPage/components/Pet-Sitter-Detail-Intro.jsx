import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const PetSitterDetailIntro = () => {
  const [sitterData1, setSitterData1] = useState(null);
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sitters/${param.id}`
        );
        setSitterData1(response.data);
      } catch (error) {
        console.error("Error fetching sitter details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Stack
        direction="row"
        className="body-detail"
        width="60%"
        paddingLeft="5%"
        paddingRight="5%"
      >
        {sitterData1 ? (
          <Stack>
            <Typography
              className="pet-sitter-name"
              variant="h3"
              gutterBottom
              fontWeight="bold"
            >
              {sitterData1.trade_name}
            </Typography>
            <Box className="introduction" sx={{ width: "100%" }}>
              <Typography
                className="pet-sitter-intro"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                Introduction
              </Typography>
              <Typography
                className="pet-sitter-intro-subtitle"
                variant="subtitle2"
                gutterBottom
                sx={{ width: "100%" }}
              >
                {sitterData1.introduction}
              </Typography>
            </Box>
            <Box className="introduction">
              <Typography
                className="pet-sitter-intro"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                Service
              </Typography>
              <Typography
                className="pet-sitter-service-subtitle"
                variant="subtitle2"
                gutterBottom
              >
                {sitterData1.service}
              </Typography>
            </Box>
            <Box className="my-place">
              <Typography
                className="pet-sitter-my-place"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                My Place
              </Typography>
              <Typography
                className="pet-sitter-my-place-subtitle"
                variant="subtitle2"
                gutterBottom
              >
                {sitterData1.my_place}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <CircularProgress />
        )}
      </Stack>
    </>
  );
};
export default PetSitterDetailIntro;
