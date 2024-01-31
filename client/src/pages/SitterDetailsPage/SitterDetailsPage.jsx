import PetSitterReview from "./components/Pet-Sitter-Review";
import PetSitterDetail from "./components/Pet-Sitter-Detail";
import Carousel from "./components/Pet-Sitter-Image-Carousel";

function SitterDetailsPage() {
  return (
    <>
      <Carousel />
      <PetSitterDetail />
      <PetSitterReview />
    </>
  );
}
export default SitterDetailsPage;
