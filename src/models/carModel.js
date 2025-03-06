const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    seats: { type: Number, required: true },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic"],
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    mileage: { type: Number, required: true },
    rentalPricePerDay: { type: Number, required: true },
    rentalPricePerHour: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    location: { type: String, required: true },
    features: { type: [String], default: [] },
    insuranceIncluded: { type: Boolean, default: false },
    carType: {
      type: String,
      enum: ["SUV", "Sedan", "Hatchback", "Convertible", "Truck"],
      required: true,
    },
    engineCapacity: { type: String, required: true },
    fuelCapacity: { type: Number, required: true },

    // Newly Added Fields
    registrationNo: { type: String, required: true, unique: true },
    chassisNo: { type: String, required: true, unique: true },
    engineNo: { type: String, required: true, unique: true },
    photos: { type: [String], default: [] },
    videos: { type: [String], default: [] },

    // Legal & Documents
    rcBookUrl: { type: String },
    insurancePolicyUrl: { type: String },
    insuranceExpiryDate: { type: Date },
    permitType: {
      type: String,
      enum: ["Commercial", "Private"],
      required: true,
    },
    permitExpiryDate: { type: Date },

    // Performance & Tracking
    currentOdometerReading: { type: Number },
    lastServiceDate: { type: Date },
    nextServiceDue: { type: Date },
    gpsTrackerId: { type: String },

    // Rental Restrictions
    minRentalPeriod: { type: Number, default: 1 }, // in hours or days
    maxRentalPeriod: { type: Number, default: 30 },
    securityDeposit: { type: Number, default: 0 },
    lateReturnPenalty: { type: Number, default: 10 }, // per hour/day
    driverRequirements: {
      minAge: { type: Number, default: 21 },
      licenseType: { type: String, default: "LMV" }, // Light Motor Vehicle
    },

    // Ratings & Reviews
    ratings: { type: [Number], default: [] },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String },
        rating: { type: Number, min: 1, max: 5 },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
