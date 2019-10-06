const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = new express.Router();
const upload = multer(uploadConfig);

// Session
routes.post("/sessions", SessionController.store);
routes.get("/sessions", SessionController.index);

// Spots
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

// dashboard
routes.get("/dashboard", DashboardController.show);

// booking
routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
