/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import Stepper from "./components/Stepper";
import Detail from "./components/Detail";
import DynamicContents from "./components/DynamicContents";
import { useBookingTools } from "../../contexts/BookingTools";
import BookingResultPage from "./BookingResult/BookingResultPage";
import BookingResultPageByCard from "./BookingResult/BookingResultPageByCard";

function BookingPage() {
  const { bookingId } = useBookingTools();
  return (
    <>
      <Navbar />

      {!bookingId && (
        <div
          css={css`
            padding: 2rem;
            display: flex;
            justify-content: space-around;
          `}
        >
          <div
            css={css`
              width: 60%;
              display: flex;
              flex-direction: column;
              gap: 2rem;
            `}
          >
            <Stepper />
            <DynamicContents />
          </div>
          <Detail />
        </div>
      )}

      {/* {bookingId && <BookingResultPage />} */}
    </>
  );
}
export default BookingPage;
