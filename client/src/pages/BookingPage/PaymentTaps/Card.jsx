import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useBookingTools } from "../../../contexts/BookingTools";
import axios from "axios";
import { Typography, Button } from "@mui/material";

export default function Card() {
  const [message, setMessage] = useState("");
  const { totalPrice, sitterData } = useBookingTools();

  const ProductDisplay = () => (
    <section>
      <div className="product">
        <div className="description">
          <h3>{sitterData.trade_name}</h3>
          <h5>{totalPrice}</h5>
        </div>
      </div>
      <Button onClick={makePayment} type="button">
        <Typography>Checkout</Typography>
      </Button>
    </section>
  );

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OjVWPDwx8QQepr8skWEKyKINrco0Yb3INjVGrOoyYOubhmF4MXH5qaeiKTnzlGqZOyT84KbEOfqlXKX7evJJgSD00WcxbUHVO"
    );

    const response = await axios.post(
      "http://localhost:4000/api/create-checkout-session",
      {
        amount: parseFloat(totalPrice) * 100,
      }
    );

    const session = await response.data;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
