/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PetSitterReviewBox from "./Pet-Sitter-Review-Box";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { averageRatingBox } from "./Style-SitterDetailPage";

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
  };
  const renderRatingButtons = () => {
    const buttons = [];
    for (let i = 5; i >= 1; i--) {
      buttons.push(
        <Button
          key={i}
          variant="outlined"
          size="small"
          onClick={() => handleStateChange(i)}
        >
          {i}
          <Rating
            name="read-only"
            value={i}
            max={i}
            readOnly
            sx={{ color: "#1CCD83" }}
          />
        </Button>
      );
    }
    return buttons;
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
            borderRadius={10}
          >
            <Stack width="20%" justifyContent={"center"} alignItems={"center"}>
              {sitterData1 &&
              sitterData1.comments &&
              sitterData1.comments.length > 0 ? (
                <Stack>
                  {sitterData1.comments.reduce((comments, index) => (
                    <Box key={index} css={averageRatingBox}>
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
                    {renderRatingButtons()}
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
