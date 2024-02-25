import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";
import stripe from "stripe";

export const paymentRouter = Router();

const stripeInstance = stripe(
  "sk_test_51OjVWPDwx8QQepr8xI2VnftyywEikkReA509MLwWgNRzHRCPtcY4qoswmAbkwA8exoEBARY3PMeyyU6FHONqfHyb00IFqWJOt1"
);

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
