import { Stack, Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import sitterData from "./data";

const PetSitterReviewBox = () => {
  return (
    <Stack className="container-review-box">
      {sitterData.map((item) => {
        return (
          <Stack className="children-review-box" direction="row" spacing={2}>
            <Stack className="profile-reviewer" width="20%" direction="row">
              <Stack>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="" src={item.profileimg} />
                  <Stack>
                    <Typography variant="button" display="block" gutterBottom>
                      {item.sitterName}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {item.fullName}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="comment-reviewer" width="80%" spacing={2}>
              <Rating
                name="read-only"
                value={item.rating}
                readOnly
                sx={{ color: "#1CCD83" }}
              />
              <Typography>
                {item.district}
                {item.province}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default PetSitterReviewBox;
