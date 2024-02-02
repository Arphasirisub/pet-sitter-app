import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PetSitterReviewBox from "./Pet-Sitter-Review-Box";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const PetSitterReview = () => {
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
          <Box
            borderRadius={10}
            sx={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              padding: "5px",
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              4.5
            </Typography>
            <Typography>24 Reviews</Typography>
          </Box>
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
