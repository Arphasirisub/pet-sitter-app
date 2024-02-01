import { Stack, Typography, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetSitterReviewBox = () => {
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
  }, [param.id]); // Add param.id to the dependency array

  return (
    <>
      <Stack className="container-review-box">
        {/* Check if sitterData1 exists and has comments property */}
        {sitterData1 &&
          sitterData1.comments &&
          // Map over the comments array
          sitterData1.comments.map((comment, index) => (
            <Stack
              key={index}
              className="children-review-box"
              direction="row"
              spacing={2}
            >
              {/* Display comment details */}
              <Stack className="profile-reviewer" width="20%" direction="row">
                <Stack>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="" src="" />
                    <Stack>
                      <Typography variant="button" display="block" gutterBottom>
                        1
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        2
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="comment-reviewer" width="80%" spacing={2}>
                <Rating
                  name="read-only"
                  value={comment.rating}
                  readOnly
                  sx={{ color: "#1CCD83" }}
                />
                <Typography>
                  {/* Display other comment details */}
                  {comment.content}
                </Typography>
              </Stack>
            </Stack>
          ))}
      </Stack>
    </>
  );
};

export default PetSitterReviewBox;
