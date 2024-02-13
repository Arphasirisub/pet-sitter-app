/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useState } from "react";
import SelectPaymentMethods from "./SelectPaymentMethods";
import { useBookingTools } from "../../../contexts/BookingTools";
import Card from "./Card";
import Cash from "./Cash";
import axios from "axios";
import { useParams } from "react-router-dom";
function PaymentTaps() {
  const [paymentMethods, setPaymentMethods] = useState("card");
  const [show, setShow] = useState(false);
  const {
    setActiveSteps,
    setCompleteStep,
    completeStep,
    selectedPets,
    totalPrice,
    message,
    setBookingId,
    bookingId,
  } = useBookingTools();
  const params = useParams();
  const handleSubmit = async () => {
    try {
      // Check if params.start is not null or undefined
      if (!params.start) {
        throw new Error("Start date is missing");
      }

      // Convert params.start to a Date object
      const start = new Date(Number(params.start));

      // Check if params.end is not null or undefined
      if (!params.end) {
        throw new Error("End date is missing");
      }

      // Convert params.end to a Date object
      const end = new Date(Number(params.end));

      // Make the POST request with the valid start and end dates
      const response = await axios.post(
        `http://localhost:4000/bookings/myBooking/${params.id}`,
        {
          start: start,
          end: end,
          pets: selectedPets,
          price: totalPrice,
          message: message,
          payment: paymentMethods,
        }
      );
      console.log(response);
      setBookingId(response.data.bookingId);
      console.log(bookingId);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div
      css={css`
        height: fit-content;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      `}
    >
      <SelectPaymentMethods
        setPaymentMethods={setPaymentMethods}
        paymentMethods={paymentMethods}
      />
      {paymentMethods === "card" && <Card />}
      {paymentMethods === "cash" && <Cash />}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Button
          css={css`
            padding: 10px;
            padding-left: 25px;
            padding-right: 25px;
            border-radius: 25px;
            color: rgb(255, 112, 55);
            background-color: rgb(255, 241, 236);
            transition: color 0.3s ease;
            &:hover {
              color: black;
            }
          `}
          onClick={() => {
            setCompleteStep({
              ...completeStep,
              payment: false,
            });
            setActiveSteps("information");
          }}
        >
          Back
        </Button>
        <Button
          css={css`
            padding: 10px;
            padding-left: 25px;
            padding-right: 25px;
            border-radius: 25px;
            color: rgb(255, 241, 236);
            background-color: rgb(255, 112, 55);
            transition: color 0.3s ease;
            &:hover {
              color: black;
            }
          `}
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
export default PaymentTaps;
