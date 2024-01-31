import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import BookNowModal from "./Pet-Sitter-Card-Book-Now";

const PetSitterCard = () => {
  return (
    <Stack paddingRight={5} paddingLeft={5}>
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
        <CardMedia
          component="img"
          image="https://1.bp.blogspot.com/-MrFEMF-zURA/V1g_uunHGLI/AAAAAAAAC2s/4umxM5AJRg4WEikSSIhkFDJIrSoyJrSJgCLcB/s1600/Kabuto_%2528Let%2527s_Go_Kamen_Riders%2529.jpg"
          alt="Kabuto"
        />

        <CardContent>
          <Typography
            className="pet-sitter-name"
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Kabuto
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
              Tendo Souji
            </Typography>
            <Typography
              className="pet-sitter-Exp"
              variant="subtitle1"
              gutterBottom
              sx={{ color: "#1CCD83" }}
            >
              1.5 Year Exp.
            </Typography>
          </Stack>

          <Rating
            name="read-only"
            value={5}
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
            <RoomSharpIcon className="location-icon" sx={{ color: "grey" }} />
            <Typography className="pet-sitter-location">
              Tokyo ,Japan
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} justifyContent={"center"}>
            <Chip
              label="Dog"
              variant="filled"
              sx={{ border: 2, color: "#1CCD83", backgroundColor: "#E7FDF4" }}
            />
            <Chip
              label="Cat"
              variant="filled"
              sx={{ border: 2, color: "#FA8AC0", backgroundColor: "#FFF0F1" }}
            />
            <Chip
              label="Rabbit"
              variant="filled"
              sx={{ border: 2, color: "#FF986F", backgroundColor: "#FFF5EC" }}
            />
          </Stack>

          <Typography
            className="pet-sitter-card-content"
            variant="body2"
            color="text.secondary"
          >
            คุณย่าเคยพูดเอาไว้ <br />
            "ความคิดเห็นไม่ตรงกัน การพนันจึงบังเกิดขึ้น"
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF7037",
            width: "330px",
            borderRadius: "100",
          }}
        >
          <BookNowModal />
        </Button>
      </Card>
    </Stack>
  );
};
export default PetSitterCard;
