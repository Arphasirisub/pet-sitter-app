/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useBookingTools } from "../../../contexts/BookingTools";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

function ConfirmModal({ show, setShow, paymentMethods }) {
  const params = useParams();
  const {
    setActiveSteps,
    setCompleteStep,
    completeStep,
    selectedPets,
    totalPrice,
    message,
    setBookingId,
    bookingId,
    setConfirmPayment,
    confirmStatus,
    isUpdateCalendar,
  } = useBookingTools();
  const navigate = useNavigate();
  // payment integration
  // const makePayment = async (bookingId) => {
  //   const stripe = await loadStripe(
  //     "pk_test_51OjVWPDwx8QQepr8skWEKyKINrco0Yb3INjVGrOoyYOubhmF4MXH5qaeiKTnzlGqZOyT84KbEOfqlXKX7evJJgSD00WcxbUHVO"
  //   );

  //   const response = await axios.post(
  //     "http://localhost:4000/payments/api/create-checkout-session",
  //     {
  //       amount: parseFloat(totalPrice) * 100,
  //       start: params.start,
  //       end: params.end,
  //       id: params.id,
  //       bookingId: bookingId,
  //     }
  //   );

  //   const session = await response.data;

  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     console.log(result.error);
  //   }
  // };
  console.log(confirmStatus);
  const handleConfirm = async () => {
    try {
      if (!params.start) {
        throw new Error("Start date is missing");
      }
      const start = new Date(Number(params.start));
      if (!params.end) {
        throw new Error("End date is missing");
      }
      if (paymentMethods === "cash") {
        const end = new Date(Number(params.end));
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
        navigate(`/booking/result/${response.data.bookingId}/${params.id}`);
        console.log(response.data.bookingId);
        if (isUpdateCalendar === true) {
          axios.post(
            `http://localhost:4000/google/schedule_event/${params.id}`,
            {
              start: start,
              end: end,
              pets: selectedPets,
              price: totalPrice,
              message: message,
              payment: paymentMethods,
            }
          );
        }
      }
      if (paymentMethods === "card") {
        // console.log(confirmStatus);
        // if (confirmStatus) {
        // }
        const end = new Date(Number(params.end));
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
        console.log(response.data.bookingId);
        setConfirmPayment(true);
        // console.log(confirmStatus);
        // makePayment(response.data.bookingId);
        if (isUpdateCalendar === true) {
          axios.post(
            `http://localhost:4000/google/schedule_event/${params.id}`,
            {
              start: start,
              end: end,
              pets: selectedPets,
              price: totalPrice,
              message: message,
              payment: paymentMethods,
            }
          );
        }
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };
  // useEffect(() => {
  //   // if (confirmStatus) {
  //   //   handleSubmit();
  //   // }
  // }, [confirmStatus]);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={show}
      onClose={() => {
        setShow(false);
      }}
      closeAfterTransition
    >
      <Fade in={show}>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background-color: #ffffff;
            border: 2px solid #000000;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 15px;
          `}
        >
          <Typography variant="h6" component="h2">
            Booking Confirmation
          </Typography>

          <Divider
            css={css`
              margin-top: 10px;
              background-color: rgba(0, 0, 0, 0.1);
              width: 100%;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 20px;
              width: 100%;
              justify-content: center;
              align-items: center;
              margin-top: 15px;
            `}
          >
            <Typography
              id="transition-modal-description"
              css={css`
                margin-top: 10px;
                color: rgb(123, 126, 143);
              `}
            >
              Are you sure to booking this pet sitter?
            </Typography>

            <div
              css={css`
                display: flex;
                justify-content: space-evenly;
                width: 100%;
              `}
            >
              <Button
                onClick={() => {
                  setShow(false);
                }}
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
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
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
              >
                Yes, I'm sure
              </Button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
export default ConfirmModal;
