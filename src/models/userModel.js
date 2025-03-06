const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true, unique: true },
    userName: { type: String, unique: true },
    name: { type: String, required: false },
    gstNo: { type: String, required: true, unique: true },
    mobileNo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: false,
    },
    dob: { type: Date, required: false },
    address: {
      street: { type: String, required: false },
      street2: { type: String },
      city: { type: String, required: false },
      state: { type: String, required: false },
      pinCode: { type: String, required: false },
      country: { type: String, required: false },
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
