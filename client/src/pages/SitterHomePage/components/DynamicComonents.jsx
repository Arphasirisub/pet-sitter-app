import PetSitterProfile from "./PetSitterProfile";
import PayoutOption from "./PayoutOption";
import BookingList from "./BookingList";

function DynamicComponents({ activeTap }) {
  return (
    <>
      {activeTap === "pet-sitter-profile" && <PetSitterProfile />}
      {activeTap === "booking-list" && <BookingList />}
      {activeTap === "payout-option" && <PayoutOption />}
    </>
  );
}

export default DynamicComponents;
