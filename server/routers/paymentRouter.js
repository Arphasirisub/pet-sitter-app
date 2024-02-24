import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";
import stripe from "stripe";

export const paymentRouter = Router();

const stripeInstance = stripe(
  "sk_test_51OjVWPDwx8QQepr8xI2VnftyywEikkReA509MLwWgNRzHRCPtcY4qoswmAbkwA8exoEBARY3PMeyyU6FHONqfHyb00IFqWJOt1"
);

paymentRouter.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount, start, end, id, bookingId } = req.body;
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: "Booking Price",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/booking/result/${bookingId}/${id}`,
      cancel_url: "http://localhost:5173/booking/cancel",
    });
    console.log(bookingId);
    console.log(session);
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Could not create checkout session" });
  }
});

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

paymentRouter.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount,
      currency: "thb",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Could not create checkout session" });
  }
});
