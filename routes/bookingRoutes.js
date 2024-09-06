
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Path to the data file
const dataFilePath = path.join(__dirname, "../data.json");

// Helper function to read data
const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(dataFilePath));
  } catch (error) {
    throw new Error("Failed to read data");
  }
};

// Helper function to write data
const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error("Failed to write data");
  }
};

// Booking route
router.post("/", (req, res, next) => {
  try {
    const booking = req.body;
    const data = readData();
    data.bookings.push(booking);
    writeData(data);
    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    next(error);
  }
});

// Cancel booking route
router.delete("/cancel", (req, res, next) => {
  try {
    const data = readData();
    const bookings = data.bookings;

    // Find the last booking based on fullname from the existing booking data
    const lastBookingIndex = [...bookings].reverse().findIndex(
      (booking) => booking.fullname === bookings[bookings.length - 1].fullname
    );

    // Check if the booking exists
    if (lastBookingIndex === -1) {
      return res.status(404).json({ message: "Booking not found." });
    }

    // Calculate the correct index of the last matching booking
    const actualIndex = bookings.length - 1 - lastBookingIndex;

    // Remove the booking
    bookings.splice(actualIndex, 1);

    // Save the updated data back to the file
    writeData(data);

    res.status(200).json({ message: "Booking canceled successfully." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
