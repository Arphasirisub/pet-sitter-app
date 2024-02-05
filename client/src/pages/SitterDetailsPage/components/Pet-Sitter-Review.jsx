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
import averageRating from "../../../PublicPicture/averageRating.png";
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
    <Stack width={1280}>
      <Stack
        className="review-container"
        height="auto"
        width="60%"
        padding={3}
        marginLeft="2%"
        marginTop={10}
        spacing={2}
        backgroundColor="#f5f6f9"
        borderRadius={10}
      >
        <Stack
          direction="row"
          padding={2}
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
                    borderRadius={10}
                    backgroundColor={"black"}
                    color={"white"}
                    textAlign={"center"}
                    padding={5}
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
            <Pagination count={1} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PetSitterReview;
