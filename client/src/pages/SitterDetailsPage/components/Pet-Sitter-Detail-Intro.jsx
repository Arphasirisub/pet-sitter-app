import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PetSitterDetailIntro = () => {
  return (
    <Stack
      direction="row"
      className="body-detail"
      width="60%"
      paddingLeft="5%"
      paddingRight="5%"
    >
      <Stack>
        <Typography
          className="pet-sitter-name"
          variant="h3"
          gutterBottom
          fontWeight="bold"
        >
          Kabuto
        </Typography>
        <Box className="introduction" sx={{ width: "100%" }}>
          <Typography
            className="pet-sitter-intro"
            variant="h6"
            gutterBottom
            fontWeight="bold"
          >
            Introduction
          </Typography>
          <Typography
            className="pet-sitter-intro-subtitle"
            variant="subtitle2"
            gutterBottom
            sx={{ width: "100%" }}
          >
            Hello there! My name is Jane Maison, and I'm your friendly and
            reliable pet sitter in Senanikom, Bangkok. I am passionate about
            animals and have dedicated myself to ensuring the well-being and
            happiness of your furry, feathery, and hoppy companions. With a big
            heart and a spacious house, I provide a safe and loving environment
            for cats, dogs, and rabbits while you're away. Let me introduce
            myself and tell you a bit more about the pet care services I offer.
          </Typography>
        </Box>
        <Box className="introduction">
          <Typography
            className="pet-sitter-intro"
            variant="h6"
            gutterBottom
            fontWeight="bold"
          >
            Service
          </Typography>
          <Typography
            className="pet-sitter-service-subtitle"
            variant="subtitle2"
            gutterBottom
          >
            🐱 Cat Sitting: Cats are fascinating creatures, and I take joy in
            catering to their independent yet affectionate nature. Whether your
            feline friend needs playtime, cuddles, or just a cozy spot to relax,
            I ensure they feel right at home.
            <br />
            🐶 Dog Sitting: Dogs are not just pets; they're family. From
            energetic walks and engaging playtime to soothing belly rubs, I
            provide a balanced and fun experience for dogs of all sizes and
            breeds. Safety and happiness are my top priorities.
            <br />
            🐇 Rabbit Sitting: With their adorable antics and gentle
            personalities, rabbits require a special kind of care. I am
            well-versed in providing them with a comfortable environment,
            appropriate diet, and ample playtime to keep them content and
            hopping with joy.
          </Typography>
        </Box>
        <Box className="my-place">
          <Typography
            className="pet-sitter-my-place"
            variant="h6"
            gutterBottom
            fontWeight="bold"
          >
            My Place
          </Typography>
          <Typography
            className="pet-sitter-my-place-subtitle"
            variant="subtitle2"
            gutterBottom
          >
            My residence is a spacious house nestled in the serene neighborhood
            of Senanikom. Your beloved pets will have plenty of room to roam and
            explore while enjoying a safe and secure environment. I have
            designated areas for play, relaxation, and sleep, ensuring your pets
            feel comfortable and at ease throughout their stay.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
export default PetSitterDetailIntro;
