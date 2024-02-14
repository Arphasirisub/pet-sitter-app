import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const bookingsRouter = Router();

bookingsRouter.get("/sitter/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select("*,owners(full_name), pet_bookings:pet_booking(booking_id) ")
      .eq("sitter_id", id);

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Calculate pets count, format booked date, and calculate duration for each booking
    const bookingsWithFormattedDate = bookings.map((booking) => {
      const petsCount = booking.pet_bookings ? booking.pet_bookings.length : 0;

      // Format booked start and stop date
      const formattedStartDate = new Date(booking.booked_start).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const formattedStopDate = new Date(booking.booked_stop).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const bookedDate = `${formattedStartDate} - ${formattedStopDate}`;

      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

      return {
        ...booking,
        pets: petsCount,
        booked_date: bookedDate,
        duration: durationInHours, //.toFixed(2) << Limit to 2 decimal places
      };
    });

    res.json(bookingsWithFormattedDate);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.get("/mybookings", protect, async (req, res) => {
  const id = req.userId;
  try {
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*, sitters(profile_img,full_name,trade_name,phone), pet_booking(pet_id(pet_name))"
      )
      .eq("owner_id", id)
      .order("booked_start", { ascending: false });

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Iterate over bookings to calculate duration and format
    const bookingsWithDuration = bookings.map((booking) => {
      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

      // Format start and stop dates
      const startDate = startDateTime.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const stopDate = stopDateTime.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const startTime = startDateTime.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      });
      const stopTime = stopDateTime.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      });

      // Combine formatted start and stop dates with times
      const bookedDate = `${startDate} -${stopDate}`;
      const bookedTime = `${startTime} - ${stopTime}`;

      // Format transaction date
      const transactionDate = new Date(booking.created_at).toLocaleString(
        "en-US",
        {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );

      return {
        ...booking,
        duration: `${durationInHours.toFixed(0)} hours`,
        transaction_date: transactionDate,
        booked_time: bookedTime,
        booked_date: bookedDate,
        stop_book_date: stopDate,
        stop_book_time: stopTime,
      };
    });

    res.json(bookingsWithDuration);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.post("/myBooking/:id", protect, async (req, res) => {
  const sitterId = req.params.id;
  const ownerId = req.userId;
  const { start, end, pets, price, message, payment } = req.body;
  console.log(req.body);

  try {
    // Insert data into the 'bookings' table
    const { data: bookingData, error: bookingError } = await supabase
      .from("bookings")
      .insert([
        {
          sitter_id: sitterId,
          owner_id: ownerId,
          booked_start: start,
          booked_stop: end,
          price: price,
          status: "Waiting for confirm",
          message: message,
          payment: payment,
        },
      ]);

    if (bookingError) {
      throw bookingError;
    }

    console.log(bookingData);

    // Retrieve the ID of the inserted booking
    const { data: insertedBooking, error: selectError } = await supabase
      .from("bookings")
      .select("id")
      .eq("owner_id", ownerId)
      .eq("booked_start", start)
      .eq("booked_stop", end)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (selectError) {
      throw selectError;
    }

    const bookingId = insertedBooking.id;

    // Insert data into the 'pet_booking' table
    const petBookingData = pets.map((pet) => ({
      pet_id: pet.id, // Assuming each pet object in the pets array has an 'id' property
      booking_id: bookingId,
    }));

    const { error: petBookingError } = await supabase
      .from("pet_booking")
      .insert(petBookingData);

    if (petBookingError) {
      throw petBookingError;
    }

    res.status(200).json({ bookingId: bookingId });
  } catch (error) {
    console.error("Error inserting data into bookings table:", error);
    res.status(500).send("Internal Server Error");
  }
});
