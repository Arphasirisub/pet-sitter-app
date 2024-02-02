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
  return (
    <Stack
      className="review-container"
      height="auto"
      width="60%"
      marginLeft="2%"
      padding={3}
      marginTop={10}
      spacing={2}
      backgroundColor="#f5f6f9"
      borderRadius={10}
    >
      <Stack direction="row" spacing={2}>
        <Stack width="20%">
          {sitterData1 &&
          sitterData1.comments &&
          sitterData1.comments.length > 0 ? (
            <Stack>
              {sitterData1.comments.reduce((comments, index) => (
                <Box
                  key={index}
                  borderRadius={10}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  <Typography>
                    {(
                      sitterData1.comments.reduce(
                        (sum, comments) => sum + comments.rating,
                        0
                      ) / sitterData1.comments.length
                    ).toFixed(2)}
                  </Typography>
                  <Typography>{sitterData1.comments.length} Reviews</Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Box
              borderRadius={10}
              sx={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                padding: "5px",
              }}
            >
              <Typography>No comments available</Typography>
            </Box>
          )}
        </Stack>
        <Stack width="75%">
          <Stack>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
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
                >
                  All Reviews
                </Button>
                <Button variant="outlined" size="small">
                  5
                  <Rating
                    name="read-only"
                    value={5}
                    max={5}
                    readOnly
                    sx={{ color: "#1CCD83" }}
                  />
                </Button>
                <Button variant="outlined" size="small">
                  4
                  <Rating
                    name="read-only"
                    value={4}
                    max={4}
                    readOnly
                    sx={{ color: "#1CCD83" }}
                  />
                </Button>
                <Button variant="outlined" size="small">
                  3
                  <Rating
                    name="read-only"
                    value={3}
                    max={3}
                    readOnly
                    sx={{ color: "#1CCD83" }}
                  />
                </Button>
                <Button variant="outlined" size="small">
                  2
                  <Rating
                    name="read-only"
                    value={2}
                    max={2}
                    readOnly
                    sx={{ color: "#1CCD83" }}
                  />
                </Button>
                <Button variant="outlined" size="small">
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
        <PetSitterReviewBox />
      </Stack>
      <Stack justifyContent="center" alignItems="center" padding="20px">
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PetSitterReview;
