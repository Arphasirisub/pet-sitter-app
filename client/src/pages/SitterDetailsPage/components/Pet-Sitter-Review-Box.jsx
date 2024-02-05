import { Stack, Typography, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

const PetSitterReviewBox = ({ comments }) => {
  return (
    <>
      <Stack className="container-review-box">
        {comments?.map((comment, index) => (
          <Stack
            key={index}
            className="children-review-box"
            direction="row"
            spacing={2}
            padding={2}
            marginTop={5}
            marginBottom={5}
          >
            <Stack className="profile-reviewer" width="20%" direction="row">
              <Stack>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="" src="" />
                  <Stack>
                    <Typography variant="button" display="block" gutterBottom>
                      name
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      date
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="comment-reviewer" width="80%" spacing={2}>
              <Rating
                name="read-only"
                value={comment.rating}
                max={comment.rating}
                readOnly
                sx={{ color: "#1CCD83" }}
              />
              <Typography>{comment.content}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default PetSitterReviewBox;
