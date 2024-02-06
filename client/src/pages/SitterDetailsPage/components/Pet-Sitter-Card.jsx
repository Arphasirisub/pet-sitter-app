/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookNowModal from "./Pet-Sitter-Card-Book-Now";
import {
  petTypeIcon,
  dogIconStyle,
  catIconStyle,
  rabbitIconStyle,
  birdIconStyle,
} from "../../SearchListPage/components/Style";

const PetSitterCard = () => {
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
      <Stack paddingRight={5} paddingLeft={5}>
        {sitterData1 ? (
          <div>
            <Card
              sx={{
                maxWidth: 345,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 5,
                boxShadow: 20,
                padding: 2,
              }}
            >
              <Stack
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Avatar
                  alt={sitterData1.full_name}
                  src={sitterData1.profile_img}
                  sx={{
                    width: 140,
                    height: 140,
                  }}
                />
              </Stack>

              <CardContent
                sx={{
                  marginBottom: 5,
                }}
              >
                <Typography
                  className="pet-sitter-name"
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {sitterData1.trade_name}
                </Typography>

                <Stack
                  className="pet-sitter-name-and-exp"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    className="pet-sitter-full-name"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {sitterData1.full_name}
                  </Typography>
                  <Typography
                    className="pet-sitter-Exp"
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#1CCD83" }}
                  >
                    {sitterData1.experience} Year Exp.
                  </Typography>
                </Stack>

                <Rating
                  name="read-only"
                  value={sitterData1.rating}
                  max={sitterData1.rating}
                  readOnly
                  sx={{ color: "#1CCD83" }}
                />

                <Stack
                  className="pet-sitter-location-content"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: 2,
                  }}
                >
                  <RoomSharpIcon
                    className="location-icon"
                    sx={{ color: "grey" }}
                  />
                  <Typography className="pet-sitter-location">
                    {sitterData1.district}, {sitterData1.province}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} justifyContent={"center"}>
                  {sitterData1.pet_type?.map((typelist, index) => {
                    return (
                      <div
                        key={index}
                        css={[
                          petTypeIcon,
                          typelist === "Dog"
                            ? dogIconStyle
                            : typelist === "Bird"
                            ? birdIconStyle
                            : typelist === "Rabbit"
                            ? rabbitIconStyle
                            : typelist === "Cat"
                            ? catIconStyle
                            : null,
                        ]}
                      >
                        {typelist}
                      </div>
                    );
                  })}
                </Stack>
              </CardContent>

              <BookNowModal />
            </Card>
          </div>
        ) : (
          <CircularProgress />
        )}
      </Stack>
    </>
  );
};
export default PetSitterCard;
