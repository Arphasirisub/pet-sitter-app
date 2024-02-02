import PetSitterProfile from "../PetSitterProfile/PetSitterProfile";
import PayoutOption from "../PayOutOption/PayoutOption";
import BookingList from "../BookingList/BookingList";

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
