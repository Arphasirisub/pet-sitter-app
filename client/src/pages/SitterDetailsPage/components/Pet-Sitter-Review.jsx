/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PetSitterReviewBox from "./Pet-Sitter-Review-Box";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetSitterReview = () => {
  const [sitterData1, setSitterData1] = useState(null);
  const param = useParams();
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sitters/${param.id}`
        );
        setSitterData1(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching sitter details:", error);
      }
    };

    fetchData();
  }, [param.id]);

  const handleClearButtonClick = () => {
    setSelectedRating(0);
  };

  const handleStateChange = (value) => {
    setSelectedRating(value);
    console.log(setSitterData1);
  };
  return (
    <>
      <Stack width={1280}>
        <Stack
          className="review-container"
          height="auto"
          width="60%"
          padding={3}
          marginLeft="2%"
          marginTop={10}
          spacing={2}
          borderRadius={10}
          css={css`
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
            background-color: #f5f6f9;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          `}
        >
          <Stack
            css={css`
              border-top-left-radius: 100px;
              border-bottom-left-radius: 100px;
              background-color: white;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              color: white;

              padding: 40px;
            `}
            direction="row"
            spacing={2}
            backgroundColor="white"
            borderRadius={10}
          >
            <Stack width="20%" justifyContent={"center"} alignItems={"center"}>
              {sitterData1 &&
              sitterData1.comments &&
              sitterData1.comments.length > 0 ? (
                <Stack>
                  {sitterData1.comments.reduce((comments, index) => (
                    <Box
                      key={index}
                      css={css`
                        border-top-left-radius: 100px;
                        border-top-right-radius: 100px;
                        border-bottom-left-radius: 100px;
                        border-bottom-right-radius: 0;
                        border: 1px solid black;
                        background-color: black;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        color: white;
                        text-align: center;
                        padding: 40px;
                      `}
                    >
                      <Typography variant="h4">
                        {(
                          sitterData1.comments.reduce(
                            (sum, comments) => sum + comments.rating,
                            0
                          ) / sitterData1.comments.length
                        ).toFixed(2)}
                      </Typography>
                      <Typography variant="body2">
                        {sitterData1.comments.length} Reviews
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Box
                  variant="h5"
                  borderRadius={10}
                  backgroundColor={"black"}
                  color={"white"}
                  textAlign={"center"}
                  padding={2}
                >
                  <Typography>No comments available</Typography>
                </Box>
              )}
            </Stack>
            <Stack width="75%">
              <Stack>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  margin={1}
                  gutterBottom
                >
                  Rating & Review
                </Typography>
              </Stack>
              <Stack>
                <Box sx={{ "& button": { m: 1 } }}>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "#FF7037" }}
                      onClick={handleClearButtonClick}
                    >
                      All Reviews
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        handleStateChange(5);
                      }}
                    >
                      5
                      <Rating
                        name="read-only"
                        value={5}
                        max={5}
                        readOnly
                        sx={{ color: "#1CCD83" }}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        handleStateChange(4);
                      }}
                    >
                      4
                      <Rating
                        name="read-only"
                        value={4}
                        max={4}
                        readOnly
                        sx={{ color: "#1CCD83" }}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        handleStateChange(3);
                      }}
                    >
                      3
                      <Rating
                        name="read-only"
                        value={3}
                        max={3}
                        readOnly
                        sx={{ color: "#1CCD83" }}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        handleStateChange(2);
                      }}
                    >
                      2
                      <Rating
                        name="read-only"
                        value={2}
                        max={2}
                        readOnly
                        sx={{ color: "#1CCD83" }}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        handleStateChange(1);
                      }}
                    >
                      1
                      <Rating
                        name="read-only"
                        value={1}
                        max={1}
                        readOnly
                        sx={{ color: "#1CCD83" }}
                      />
                    </Button>
                  </div>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="100%">
            <PetSitterReviewBox
              comments={
                selectedRating
                  ? sitterData1?.comments.filter(
                      (comment) => comment.rating === selectedRating
                    )
                  : sitterData1?.comments
              }
            />
          </Stack>
          <Stack justifyContent="center" alignItems="center" padding="20px">
            <Stack spacing={2}>
              <Pagination count={1} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default PetSitterReview;
