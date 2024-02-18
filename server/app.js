import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import stripe from "stripe";
import { ownersRouter } from "./routers/ownerRouter.js";
import { authenticationRouter } from "./routers/authenticationRouter.js";
import { bookingsRouter } from "./routers/bookingsRouter.js";
import { sittersRouter } from "./routers/sittersRouter.js";
import { petsRouter } from "./routers/petsRouter.js";
import { facebookRouter } from "./routers/facebookRouter.js";
import { commentsRouter } from "./routers/commentsRouter.js";

function init() {
  dotenv.config();

  const app = express();
  const port = 4000;

  const stripeInstance = stripe(
    "sk_test_51OjVWPDwx8QQepr8xI2VnftyywEikkReA509MLwWgNRzHRCPtcY4qoswmAbkwA8exoEBARY3PMeyyU6FHONqfHyb00IFqWJOt1"
  );

  // Middleware
  app.use(cors());
  app.use(bodyParser.json());

  // Routes
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { amount, start, stop, param } = req.body;
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
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
      console.log(session);
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Could not create checkout session" });
    }
  });

  app.get("/", (req, res) => {
    res.send("Hello supabase");
  });

  app.use("/owners", ownersRouter);
  app.use("/authentication", authenticationRouter);
  app.use("/bookings", bookingsRouter);
  app.use("/sitters", sittersRouter);
  app.use("/pets", petsRouter);
  app.use("/facebook", facebookRouter);
  app.use("/comments", commentsRouter);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

init();
