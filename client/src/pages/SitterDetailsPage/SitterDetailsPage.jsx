import PetSitterReview from "./components/Pet-Sitter-Review";
import PetSitterDetail from "./components/Pet-Sitter-Detail";
import Carousel from "./components/Pet-Sitter-Image-Carousel";
import Navbar from "../../public-components/Navbar";

function SitterDetailsPage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <PetSitterDetail />
      <PetSitterReview />
      {/* <Footer /> */}
    </>
  );
}
export default SitterDetailsPage;
