import Stack from "@mui/material/Stack";
import PetSitterCard from "./Pet-Sitter-Card";
import PetSitterDetailIntro from "./Pet-Sitter-Detail-Intro";

const PetSitterDetail = () => {
  return (
    <>
      <Stack
        direction="row"
        className="body-detail"
        paddingTop={10}
        width={1280}
      >
        <PetSitterDetailIntro />
        <PetSitterCard />
      </Stack>
    </>
  );
};
export default PetSitterDetail;
