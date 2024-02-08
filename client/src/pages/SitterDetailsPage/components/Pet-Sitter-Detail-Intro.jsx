/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
        paddingLeft="10%"
        paddingRight="8%"
      >
        {sitterData1 ? (
          <Stack>
            <Typography
              className="pet-sitter-name"
              variant="h3"
              gutterBottom
              fontWeight="bold"
              css={css`
                margin-bottom: 40px;
              `}
            >
              {sitterData1.trade_name}
            </Typography>
            <Box
              className="introduction"
              css={css`
                margin-bottom: 40px;
              `}
            >
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
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData1.introduction}
              </Typography>
            </Box>
            <Box
              className="introduction"
              css={css`
                margin-bottom: 40px;
              `}
            >
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
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData1.service}
              </Typography>
            </Box>
            <Box
              className="my-place"
              css={css`
                margin-bottom: 40px;
              `}
            >
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
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData1.my_place}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <CircularProgress color="warning" />
        )}
      </Stack>
    </>
  );
};
export default PetSitterDetailIntro;
